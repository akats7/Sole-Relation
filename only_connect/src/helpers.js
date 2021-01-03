export function randomize(arr) {
    let random = [];
    let val = 0;
    while (arr.length) {
        let index = Math.floor(Math.random() * arr.length);
        val = arr.splice(index, 1);
        random.push(...val);
    }
    return random;
}

export function animate(arr, eltBoundsBefore, color) {
    const eltBoundsAfter = arr.map((el) => {
        return el.current.getBoundingClientRect();
    });

    arr.forEach((item, index) => {
        const deltaX = eltBoundsBefore[index].left - eltBoundsAfter[index].left;
        const deltaY = eltBoundsBefore[index].top - eltBoundsAfter[index].top;
        const deltaW = eltBoundsBefore[index].width / eltBoundsAfter[index].width;
        const deltaH = eltBoundsBefore[index].height / eltBoundsAfter[index].height;

        item.current.animate(
            [
                {
                    transformOrigin: "top left",
                    transform: `
                  translate(${deltaX}px, ${deltaY}px)
                  scale(${deltaW}, ${deltaH})
                `,
                },
                {
                    transformOrigin: "top left",
                    transform: `
                translate(${0}px, ${0}px)
                scale(${deltaW}, ${deltaH})
              `,
                },
            ],
            {
                duration: 1000,
                easing: "ease-in-out",
                fill: "both",
            },
        );
    });
}
