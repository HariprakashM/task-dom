
    let a=lab("label","first","Firstname"); 
    let a1=inp("text","first");
    let a2=bn();
    let b=lab("label","last","Lastname");
    let b1=inp("text","last");
    let b2=bn();
    let c=lab("label","email","Email"); 
    let c1=inp("email","email");
    let c2=bn();
    let d=lab("label","pass","Password"); 
    let d1=inp("password","pass");
    let d2=bn();
    let button=document.createElement("button");
    button.setAttribute("onclick","onfn()");
    button.innerHTML="Submit";
    document.body.append(a,a1,a2,b,b1,b2,c,c1,c2,d,d1,d2,button);
    function onfn(){
        let ax=document.getElementById("first").value;
        console.log(ax);
        let ac=document.getElementById("last").value;
        console.log(ac);
        let av=document.getElementById("email").value;
        console.log(av);
        let an=document.getElementById("pass").value;
        console.log(an);
    }
    function lab(tagname,ref,cont){
        let ab =document.createElement(tagname);
        ab.setAttribute("for",ref);
        ab.innerHTML=cont;
        return ab;
    }
    function inp(cat,idne){
        let cd=document.createElement("input");
        cd.setAttribute("type",cat);
        cd.setAttribute("id",idne);
        return cd;
    }
    function bn(){
        let ef=document.createElement("br");
        return ef;
    }