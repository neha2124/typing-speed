import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizzing: border-box;
}
body{
    background-color:${({theme}) => theme.background};
    color:${({theme}) => theme.TypeBox};
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
.logo img{
  width:30px;
  border-radius:20px;
}
.current{
  border-left: 1px solid white;
  animation: blink 2s infinite ease;

  @keyframes blink{
    0%{
      border-left: 1px solid ${({theme})=>theme.TypeBox};
    }
    25%{
      border-left: 1px solid ${({theme})=> theme.background};
    }
    50%{
      border-left: 1px solid ${({theme})=>theme.TypeBox};
    }
    75%{
      border-left: 1px solid ${({theme})=> theme.background};
    }
    100%{
      border-left: 1px solid ${({theme})=>theme.TypeBox};
    }

  }
}
.current-right{
  border-right: 1px solid white;
  animation: blink-right 2s infinite ease;

  @keyframes blink-right{
    0%{
      border-right: 1px solid ${({theme}) => theme.TypeBox};
    }
    25%{
      border-right: 1px solid ${({theme})=> theme.background};
    }
    50%{
      border-right: 1px solid ${({theme}) => theme.TypeBox};
    }
    75%{
      border-right: 1px solid ${({theme})=> theme.background};
    }
    100%{
      border-right: 1px solid ${({theme}) => theme.TypeBox};
    }

  }

}
.correct{
  color:${({theme})=> (theme.color)};
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
    color: ${({theme})=> theme.TypeBox};
    padding: 5px;
}
.subtitle{
  font-size: 40px;
    color:${({theme})=> theme.color};
}
.header-component{
  display:flex;
  width:1000px;
  justify-content:space-between;
  margin:auto;
  
}
.userPage{
  width:1000px;
  margin:auto;

}
.user-info{
  display:flex;
  align-item:center;
  // justify-content:center;
  // flex-direction:column;
  background:${({theme})=> theme.background};
  // opacity:.6;
  height:170px;
  width:1000px;
  margin:auto;
  border-radius:10px
}
.account{
  width:50%;
  border-right: 2px solid;
  font-size:1.5rem;
  display:flex;
  justify-content:center;
  align-items:center;
  gap: 2rem;
  // flex-direction:column;
  margin:3rem;

}
.info{
  display:flex;
  flex-direction : column;
}
.user-icon{
  transform:scale(4);
  margin-top:12px;
  color:${({theme})=> theme.color}
}

  

.total-test{
  
  font-size:2rem;
  display:flex;
  align-items:center;
  width: 50%;
  
}
`