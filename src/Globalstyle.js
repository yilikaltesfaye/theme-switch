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
        --text1: #bdbdbd;
        --text-2: #828282;
        --border: #ffc700;
        --btn-color: #f2f6ff;
        --circle-color: red;
    }
    .light {
        --bg-header: #f2f6ff;
        --bg-body: #fff;
        --bg-menu: #f56692;
        --text1: #bdbdbd;
        --text-2: #828282;
        --border: #ffc700;
        --btn-color: #f2f6ff;
        --circle-color: red;
    }
    .dark {
        --bg-header: #f2f6ff;
        --bg-body: #fff;
        --bg-menu: #f56692;
        --text1: #bdbdbd;
        --text-2: #828282;
        --border: #ffc700;
        --btn-color: #f2f6ff;
        --circle-color: red;
    }
    .green {
        --bg-header: #f2f6ff;
        --bg-body: #fff;
        --bg-menu: #f56692;
        --text1: #bdbdbd;
        --text-2: #828282;
        --border: #ffc700;
        --btn-color: #f2f6ff;
        --circle-color: red;
    }
    .yellow {
        --bg-header: #f2f6ff;
        --bg-body: #fff;
        --bg-menu: #f56692;
        --text1: #bdbdbd;
        --text-2: #828282;
        --border: #ffc700;
        --btn-color: #f2f6ff;
        --circle-color: red;
    }
        
    body {
        background-color: var(--bg-body);
    }
`;


export default Globalstyle