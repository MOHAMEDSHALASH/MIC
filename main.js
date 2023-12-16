
let record =document.getElementById("mic")
let textArea=document.querySelector("textarea")
let lang=document.getElementById("lang")
let langMode="ar"
lang.onclick=(eo)=>{
      if(langMode==="ar"){
            eo.target.textContent="EN"
            record.dataset.lang="en-EN"
            langMode="en"
      }else{
            eo.target.textContent="AR"
            record.dataset.lang="ar-AR"
            langMode="ar"
      }
}

record.onclick=(e)=>{
      console.log()
      let speech=true;
      window.SpeechRecognition= window.webkitSpeechRecognition;
      let recognition=new SpeechRecognition();
      recognition.lang=e.target.dataset.lang;
      recognition.interimResults;
      recognition.addEventListener('result',e=>{
          let transcript=Array.from(e.results)
          .map(result=>result[0])
          .map(result =>result.transcript)
          textArea.value += transcript +" ";
          console.log(transcript)
      })
      if(speech){
          recognition.start()
      }
}

