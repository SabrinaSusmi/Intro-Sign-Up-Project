function validation(){
  var f = document.getElementById('firstName');
  var l = document.getElementById('lastName');
  var e = document.getElementById('Email');
  var p = document.getElementById('Password');
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (f.value==="") {
    f.className="wrong";
    document.getElementById('msgF').className="alert";
  }
  else{
    f.className="";
    document.getElementById('msgF').className="";
  }

  if (l.value==="") {
    l.className="wrong";
    document.getElementById('msgL').className="alert";
  }
  else{
    l.className="";
    document.getElementById('msgL').className="";
  }

  if (p.value==="" || p.value.length<6) {
    p.className="wrong";
    document.getElementById('msgP').className="alert";
  }
  else{
    p.className="";
    document.getElementById('msgP').className="";
  }

  if(e.value.match(mailformat)){
    e.className="";
    document.getElementById('msgE').className="";
    // e.value=;
  }
  else{
    e.className="wrong";
    document.getElementById('msgE').className="alert";
  }

  if(f.value!="" && l.value!="" && e.value.match(mailformat) && p.value!="" && p.value.length>=6){
    f.value="";
    l.value="";
    e.value="";
    p.value="";
  }

}