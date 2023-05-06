import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizzing: border-box;
}
body{
    background-color:#323437;
    color:#d1d0c5;
    margin:0;
    padding:0;
    transition: all 0.25s linear
}
.canvas{
  display:grid;
  grid-auto-flow: row;
   min-height:90vh;
  grid-template-rows : auto 1fr auto;
  gap:0.5rem;
  padding:2rem;
  // width:100vw;
  align-items: center;
  text-align:center;

}
.type-box{
  display:block;
  height:140px;
  width:1000px;
  margin:auto;
  // overflow: hidden;
}
.words{
  display:flex;
  flex-wrap:wrap;
  // padding:5px;
  font-size:22px;
  // margin:2px;
}
.word{
  padding:5px;
}
.input-box{
 opacity:0;
}
.current{
  border-left: 1px solid white;
  animation: blink 2s infinite ease;

  @keyframes blink{
    0%{
      border-left: 1px solid white;
    }
    25%{
      border-left: 1px solid black;
    }
    50%{
      border-left: 1px solid white;
    }
    75%{
      border-left: 1px solid black;
    }
    100%{
      border-left: 1px solid white;
    }

  }
}
.current-right{
  border-right: 1px solid white;
  animation: blink-right 2s infinite ease;

  @keyframes blink-right{
    0%{
      border-right: 1px solid white;
    }
    25%{
      border-right: 1px solid black;
    }
    50%{
      border-right: 1px solid white;
    }
    75%{
      border-right: 1px solid black;
    }
    100%{
      border-right: 1px solid white;
    }

  }

}
.correct{
  color:green;
}
.incorrect{
  color:red;
}
.Time-mode-section{
  display:flex;
  justify-content:space-between;
  margin: auto;
  width:1000px;
  // margin:2rem;
  font-size:1.2rem;
  padding:1rem;


}
.test-modes{
  display:flex;
  gap:1.2rem;
  cursor:pointer;
}
.footer-section{
  display: flex;
  justify-content:space-between;
  margin:auto;
  width:1000px

}
.stats-component{
  display:flex;
  gap:2rem;
  align-items:center;
//  justify-content:space-between;
//  width:1000px;
//  margin:auto;;


}
.stats{
  width:30%;
  
}
.graph{
  width:80%
}
.title{
  font-size: 31px;
    color: #db7093a3;
    padding: 5px;
}
.subtitle{
  font-size: 40px;
    color: palevioletred;
}
.header-component{
  display:flex;
  width:1000px;
  justify-content:space-between;
  margin:auto;
  
}
`