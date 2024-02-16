import { createGlobalStyle } from 'styled-components'


const Globalstyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }
    :root {
        --bg-header: #f2f6ff;
        --bg-body: #fff;
        --bg-menu: #f56692;
        --text-color: #000000;
        --border: #ffc700;
        --btn-color: #f2f6ff;
        --circle-color: red;
    }
    .light {
        --bg-header: #ffffff;
        --bg-body: #d2e1e7;
        --bg-menu: #d2e1e7;
        --text-color: #000000;
        --border: #00d9ff;
        --btn-color: #9cb4ec;
        --circle-color: #ffffff;
        --box-sh: 6px 5px 15px #00000033;
    }
    .dark {
        --bg-header: #081627;
        --bg-body: #525151;
        --bg-menu: #525151;
        --text-color: #ffffff;
        --border: #027083;
        --btn-color: #027083;
        --circle-color: #000000;
        --box-sh: 6px 5px 15px #ffffffb2;
    }
    .green {
        --bg-header: #76ac55;
        --bg-body: #d2e1e7;
        --bg-menu: #5bd36b;
        --text-color: #000000;
        --border: #00d9ff;
        --btn-color: #9cb4ec;
        --circle-color: #76ac55;     
        --box-sh: 6px 5px 15px #00000033;
    }
    .yellow {
        --bg-header: #ffc700;
        --bg-body: #d2e1e7;
        --bg-menu: #ffc700c5;
        --text-color: #000000;
        --border: #00d9ff;
        --btn-color: #9cb4ec;
        --circle-color: #ffff00;
        --box-sh: 6px 5px 15px #00000033;
    }    
    body {
        background-color: var(--bg-body);
    }
`;


export default Globalstyle