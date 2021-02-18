import React, { createRef, Component } from "react";
import Rectangle from "./Rectangle";
import { v4 as uuidv4 } from "uuid";
import { clearClickedList, checkForMatch, animate, randomize } from "../utilities/helpersWordWall";
import Timer from "./Timer";

const colorDictionary = {
    0: "bg-gradient-to-r from-red-500 via-red-400 to-red-500",
    1: "bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500",
    2: "bg-gradient-to-r from-green-500 via-green-400 to-green-500",
    3: "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500",
};
// const wordDictionary = [
//     ["Hazelnut", "Butter Pecan", "Coconut", "Caramel"],
//     ["Cube", "Vanilla", "T", "Prince"],
//     ["Australia", "Guam", "Papua New Guinea", "Cook Islands"],
//     ["Champagne", "San Pellegrino", "Fiji", "Mocha"],
// ];


class WordWall extends Component {
    constructor(props) {
        super();
        this.wordDictionary = props.data;
        this.idToIndex = new Map();
        this.refsArr = [];
        this.state = {
            clicked: [],
            color_count: 0,
            solved: [],
        };
        this.handleClickBlock = this.handleClickBlock.bind(this);
        this.solveBoard = this.solveBoard.bind(this);
    }

    componentDidMount() {
        let blocks = [];
        for (let [index, group] of this.wordDictionary.entries()) {
            let words = group["clues"].map((word) => {
                this.refsArr.push(createRef());
                return {
                    word: word,
                    color: "bg-oc-blue",
                    id: uuidv4(),
                    group: index,
                    clicked: false,
                    matched: false,
                };
            });
            blocks.push(...words);
        }
        blocks = randomize(blocks);
        for (let [index, block] of blocks.entries()) {
            this.idToIndex.set(block.id, index);
        }
        this.setState({ solved: blocks });
    }

    handleClickBlock(obj) {
        if (this.state.clicked.length < 4) {
            if (obj.clicked) {
                this.unClickBlock(obj);
            } else {
                this.clickBlock(obj);
            }
        }
    }

    clickBlock(obj) {
        const clickedList = [...this.state.clicked],
            solvedList = [...this.state.solved];
        let count = this.state.color_count;
        clickedList.push(obj);
        const foundIndex = this.idToIndex.get(obj.id);
        solvedList[foundIndex].clicked = true;
        solvedList[foundIndex].color = colorDictionary[count];
        this.setState({ solved: solvedList, clicked: clickedList }, () => {
            if (clickedList.length === 4) {
                this.fourthBlockClicked();
            }
        });
    }

    fourthBlockClicked() {
        let delay = 0,
            count = this.state.color_count;
        const clickedList = [...this.state.clicked];
        const solvedList = [...this.state.solved];
        const areOfSameGroup = checkForMatch(clickedList);
        if (areOfSameGroup) {
            if (count === 2) {
                this.solveBoard();
            } else {
                this.matchRow(clickedList, solvedList, count);
                count++;
            }
        } else {
            clearClickedList(clickedList, solvedList, this.idToIndex);
            delay = 250;
        }
        clickedList.length = 0;
        setTimeout(() => {
            this.setState({
                solved: solvedList,
                clicked: clickedList,
                color_count: count,
            });
        }, delay);
    }

    unClickBlock(obj) {
        let clickedList = [...this.state.clicked],
            solvedList = [...this.state.solved];
        clickedList = clickedList.filter((word) => {
            return word.id !== obj.id;
        });
        let unclickIndex = this.idToIndex.get(obj.id);
        solvedList[unclickIndex].color = "bg-oc-blue";
        solvedList[unclickIndex].clicked = false;
        this.setState({ solved: solvedList, clicked: clickedList });
    }

    matchRow(clickedList, solvedList, count) {
        const eltBoundsBefore = this.refsArr.map((el) => {
            return el.current.getBoundingClientRect();
        });
        const arr = [...this.refsArr];
        for (let block of clickedList) {
            const foundIndex = solvedList.findIndex((word) => word.id === block.id);
            solvedList[foundIndex].matched = true;
            const removedVal = solvedList.splice(foundIndex, 1);
            const removedRef = this.refsArr.splice(foundIndex, 1);
            solvedList.splice(count * 4, 0, ...removedVal);
            this.refsArr.splice(count * 4, 0, ...removedRef);
        }
        this.setState({ solved: solvedList }, () => {
            animate(arr, eltBoundsBefore);
            for (let [index, block] of solvedList.entries()) {
                this.idToIndex.set(block.id, index);
            }
        });
    }

    solveBoard() {
        const solvedList = [...this.state.solved];
        const color = this.state.color_count;
        const nodeToRef = new Map();
        const eltBoundsBefore = this.refsArr.map((el) => {
            return el.current.getBoundingClientRect();
        });
        let arr = [...this.refsArr];
        const matchedIndex = solvedList.findIndex((el) => !el.matched);

        solvedList.forEach((block, index) => {
            nodeToRef.set(block.id, this.refsArr[index]);
        });
        const length = solvedList.length;
        const toBeMatched = solvedList.splice(matchedIndex, length - matchedIndex);
        this.refsArr.splice(matchedIndex, length - matchedIndex);

        toBeMatched.sort((a, b) => a.group - b.group);
        toBeMatched.forEach((block, index) => {
            block.matched = true;
            block.clicked = true;
            block.color = colorDictionary[color + Math.floor(index / 4)];
            solvedList.push(block);
            this.refsArr.push(nodeToRef.get(block.id));
        });
        this.setState({ solved: solvedList }, () => {
            animate(arr, eltBoundsBefore);
        });

        setTimeout(()=>{this.props.exit();}, 2000);
    }

    buildBoard() {
        return this.state.solved.map((block, index) => {
            return (
                <div className="col-span-1"><Rectangle
                ref={this.refsArr[index]}
                key={block.id}
                type="wall"
                {...block}
                clickBlock={this.handleClickBlock}
            >
                {block.word}
            </Rectangle></div>
                
            );
        });
    }

    render() {
        return (
            <div className="container">
                <div className="grid grid-flow-row py-2 lg:py-10 gap-y-1 lg:gap-y-6 lg:gap-x-6 justify-center items-center">
                    <div className="row-start-1 col-span-4">
                        <Timer completed={0} max={150} type="wall"/>
                    </div>
                    <div className="row-start-2 col-span-4">
                        <div className="grid grid-cols-4 gap-y-1 gap-x-1 lg:gap-y-4 lg:gap-x-6">
                            {this.buildBoard()}
                        </div>
                    </div>
                    <div className="row-start-3 col-span-4">
                        <button className="w-full bg-blue-700 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded" onClick={this.solveBoard}>Solve</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default WordWall;
