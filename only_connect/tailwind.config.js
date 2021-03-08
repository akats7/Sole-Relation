module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow:
    {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, .75)',
    },
    container: {
      center: true,
    },
    fontFamily: {
      'sans': ["Times New Roman"]
    },
    extend: {
      colors: {
        'light-accent': '#c1acb2',
        'dark-accent': '#888793',
        'light-shade': '#F2EDE8',
        'dark-shade': '#3F76B6',
        'next': '#94FFF1',
        'next-text': '#AB19B3',
        

        'light': '#B6D2D4',
        'dark': '#646370',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '750px',
        '100': '1000px',
      },
      width:
      {
        '0/5': '0.0%',
        '0/40': '0.0%',
        '1/40': '2.5%',
        '2/40': '5.0%',
        '3/40': '7.5%',
        '4/40': '10.0%',
        '5/40': '12.5%',
        '6/40': '15.0%',
        '7/40': '17.5%',
        '8/40': '20.0%',
        '9/40': '22.5%',
        '10/40': '25.0%',
        '11/40': '27.5%',
        '12/40': '30.0%',
        '13/40': '32.5%',
        '14/40': '35.0%',
        '15/40': '37.5%',
        '16/40': '40.0%',
        '17/40': '42.5%',
        '18/40': '45.0%',
        '19/40': '47.5%',
        '20/40': '50.0%',
        '21/40': '52.5%',
        '22/40': '55%',
        '23/40': '57.5%',
        '24/40': '60.0%',
        '25/40': '62.5%',
        '26/40': '65.0%',
        '27/40': '67.5%',
        '28/40': '70.0%',
        '29/40': '72.5%',
        '30/40': '75.0%',
        '31/40': '77.5%',
        '32/40': '80.0%',
        '33/40': '82.5%',
        '34/40': '85.0%',
        '35/40': '87.5%',
        '36/40': '90.0%',
        '37/40': '92.5%',
        '38/40': '95.0%',
        '39/40': '97.5%',
        '40/40': '100.0%',
        '0/150': '0.0%',
        '1/150': '0.6666666666666667%',
        '2/150': '1.3333333333333335%',
        '3/150': '2.0%',
        '4/150': '2.666666666666667%',
        '5/150': '3.3333333333333335%',
        '6/150': '4.0%',
        '7/150': '4.666666666666667%',
        '8/150': '5.333333333333334%',
        '9/150': '6.0%',
        '10/150': '6.666666666666667%',
        '11/150': '7.333333333333333%',
        '12/150': '8.0%',
        '13/150': '8.666666666666668%',
        '14/150': '9.333333333333334%',
        '15/150': '10.0%',
        '16/150': '10.666666666666668%',
        '17/150': '11.333333333333332%',
        '18/150': '12.0%',
        '19/150': '12.666666666666668%',
        '20/150': '13.333333333333334%',
        '21/150': '14.000000000000002%',
        '22/150': '14.666666666666666%',
        '23/150': '15.333333333333332%',
        '24/150': '16.0%',
        '25/150': '16.666666666666664%',
        '26/150': '17.333333333333336%',
        '27/150': '18.0%',
        '28/150': '18.666666666666668%',
        '29/150': '19.333333333333332%',
        '30/150': '20.0%',
        '31/150': '20.666666666666668%',
        '32/150': '21.333333333333336%',
        '33/150': '22.0%',
        '34/150': '22.666666666666664%',
        '35/150': '23.333333333333332%',
        '36/150': '24.0%',
        '37/150': '24.666666666666668%',
        '38/150': '25.333333333333336%',
        '39/150': '26.0%',
        '40/150': '26.666666666666668%',
        '41/150': '27.333333333333332%',
        '42/150': '28.000000000000004%',
        '43/150': '28.666666666666668%',
        '44/150': '29.333333333333332%',
        '45/150': '30.0%',
        '46/150': '30.666666666666664%',
        '47/150': '31.333333333333336%',
        '48/150': '32.0%',
        '49/150': '32.666666666666664%',
        '50/150': '33.33333333333333%',
        '51/150': '34.0%',
        '52/150': '34.66666666666667%',
        '53/150': '35.333333333333336%',
        '54/150': '36.0%',
        '55/150': '36.666666666666664%',
        '56/150': '37.333333333333336%',
        '57/150': '38.0%',
        '58/150': '38.666666666666664%',
        '59/150': '39.33333333333333%',
        '60/150': '40.0%',
        '61/150': '40.666666666666664%',
        '62/150': '41.333333333333336%',
        '63/150': '42.0%',
        '64/150': '42.66666666666667%',
        '65/150': '43.333333333333336%',
        '66/150': '44.0%',
        '67/150': '44.666666666666664%',
        '68/150': '45.33333333333333%',
        '69/150': '46.0%',
        '70/150': '46.666666666666664%',
        '71/150': '47.333333333333336%',
        '72/150': '48.0%',
        '73/150': '48.66666666666667%',
        '74/150': '49.333333333333336%',
        '75/150': '50.0%',
        '76/150': '50.66666666666667%',
        '77/150': '51.33333333333333%',
        '78/150': '52.0%',
        '79/150': '52.666666666666664%',
        '80/150': '53.333333333333336%',
        '81/150': '54.0%',
        '82/150': '54.666666666666664%',
        '83/150': '55.333333333333336%',
        '84/150': '56.00000000000001%',
        '85/150': '56.666666666666664%',
        '86/150': '57.333333333333336%',
        '87/150': '57.99999999999999%',
        '88/150': '58.666666666666664%',
        '89/150': '59.333333333333336%',
        '90/150': '60.0%',
        '91/150': '60.66666666666667%',
        '92/150': '61.33333333333333%',
        '93/150': '62.0%',
        '94/150': '62.66666666666667%',
        '95/150': '63.33333333333333%',
        '96/150': '64.0%',
        '97/150': '64.66666666666666%',
        '98/150': '65.33333333333333%',
        '99/150': '66.0%',
        '100/150': '66.66666666666666%',
        '101/150': '67.33333333333333%',
        '102/150': '68.0%',
        '103/150': '68.66666666666667%',
        '104/150': '69.33333333333334%',
        '105/150': '70.0%',
        '106/150': '70.66666666666667%',
        '107/150': '71.33333333333334%',
        '108/150': '72.0%',
        '109/150': '72.66666666666667%',
        '110/150': '73.33333333333333%',
        '111/150': '74.0%',
        '112/150': '74.66666666666667%',
        '113/150': '75.33333333333333%',
        '114/150': '76.0%',
        '115/150': '76.66666666666667%',
        '116/150': '77.33333333333333%',
        '117/150': '78.0%',
        '118/150': '78.66666666666666%',
        '119/150': '79.33333333333333%',
        '120/150': '80.0%',
        '121/150': '80.66666666666666%',
        '122/150': '81.33333333333333%',
        '123/150': '82.0%',
        '124/150': '82.66666666666667%',
        '125/150': '83.33333333333334%',
        '126/150': '84.0%',
        '127/150': '84.66666666666667%',
        '128/150': '85.33333333333334%',
        '129/150': '86.0%',
        '130/150': '86.66666666666667%',
        '131/150': '87.33333333333333%',
        '132/150': '88.0%',
        '133/150': '88.66666666666667%',
        '134/150': '89.33333333333333%',
        '135/150': '90.0%',
        '136/150': '90.66666666666666%',
        '137/150': '91.33333333333333%',
        '138/150': '92.0%',
        '139/150': '92.66666666666666%',
        '140/150': '93.33333333333333%',
        '141/150': '94.0%',
        '142/150': '94.66666666666667%',
        '143/150': '95.33333333333334%',
        '144/150': '96.0%',
        '145/150': '96.66666666666667%',
        '146/150': '97.33333333333334%',
        '147/150': '98.0%',
        '148/150': '98.66666666666667%',
        '149/150': '99.33333333333333%',
        '150/150': '100.0%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
