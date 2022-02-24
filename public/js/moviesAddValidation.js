const w=window;
const d=document;

w.addEventListener('load',()=>{
    const title = d.querySelector('#title')
    const rating = d.querySelector('#rating')
    const awards = d.querySelector('#awards')
    const release_date = d.querySelector('#release_date')
    const length = d.querySelector('#length')
    const genero=d.querySelector('#genero')
    const titleError = d.querySelector(".titleError")
    const ratingError = d.querySelector(".ratingError")
    const awardsError = d.querySelector(".awardsError")
    const release_dateError = d.querySelector(".release_dateError")
    const lengthError = d.querySelector(".lengthError")
    const generoError=d.querySelector('.generoError')
    const inputAll=d.querySelectorAll("input")
    const errorAll=d.querySelectorAll(".error")
    const form = d.querySelector('form')
    
    const btnAgregar=d.querySelector(".botonAgregar")

    title.focus() // hace foco sobre el campo
    btnAgregar.disabled=true
    btnAgregar.classList.add("deshabilitado")

    let validacion={
        title:false,
        rating:false,
        awards:false,
        length:false
    }
    const funcValidate =(obj)=>{
    let arrValidate=Object.values(obj)
    
    if(!arrValidate.includes(false)){
        btnAgregar.disabled=false
        btnAgregar.classList.remove("deshabilitado")
        
    }else{
        btnAgregar.disabled=true
        btnAgregar.classList.add("deshabilitado")
    }
   
}
 



    title.addEventListener('keyup',e=>{
        
        if(title.value===""){

            title.classList.add("is-invalid")
            titleError.innerHTML="este campo no puede estar vacio"
            validacion.title=false
        }else{
            title.classList.remove("is-invalid")
            title.classList.add("is-valid")
            titleError.innerHTML=""
            validacion.title=true
        }
        funcValidate(validacion)
    })
    rating.addEventListener('keyup',e=>{
        console.log(rating.value)
        if(rating.value===""){
            rating.classList.add("is-invalid")
            ratingError.innerHTML="este campo no puede estar vacio"
            validacion.rating=false
        }else if(rating.value < 0 || rating.value > 10){
            
            rating.classList.add("is-invalid")
            ratingError.innerHTML="numero comprendido entre 0 y 10"
            validacion.rating=true
        }else{
            rating.classList.remove("is-invalid")
            rating.classList.add("is-valid")
            ratingError.innerHTML=""
            validacion.rating=true
        }
        funcValidate(validacion)
        
    })    
    awards.addEventListener('keyup',e=>{
        if(awards.value===""){
            awards.classList.add("is-invalid")
            awardsError.innerHTML="este campo no puede estar vacio"
            validacion.awards=false
        }else if(awards.value < 0 || awards.value > 10){
            
            awards.classList.add("is-invalid")
            awardsError.innerHTML="numero comprendido entre 0 y 10"
            validacion.awards=true
        }else{
            awards.classList.remove("is-invalid")
            awards.classList.add("is-valid")
            awardsError.innerHTML=""
            validacion.awards=true
        }
        funcValidate(validacion)
        
    })    
    release_date.addEventListener('input',e=>{

        
        if(release_date.value===""){
            release_date.classList.add("is-invalid")
            release_dateError.innerHTML="este campo no puede estar vacio"
        }else{
            release_date.classList.remove("is-invalid")
            release_date.classList.add("is-valid")
            release_dateError.innerHTML=""
        }
        
        
    })    
    length.addEventListener('keyup',e=>{
        if(length.value===""){
            length.classList.add("is-invalid")
            lengthError.innerHTML="este campo no puede estar vacio"
            validacion.length=false

        }else if(length.value < 60 || length.value > 360){
            
            length.classList.add("is-invalid")
            lengthError.innerHTML="numero comprendido entre 60 y 360"
            validacion.length=true
    }else{
            length.classList.remove("is-invalid")
            length.classList.add("is-valid")
            lengthError.innerHTML=""
            validacion.length=true
        }
        funcValidate(validacion)
        
    })
    genero.addEventListener('input',e=>{

    
        if(genero.value===""){
            genero.classList.add("is-invalid")
            generoError.innerHTML="este campo no puede estar vacio"
        }else{
            genero.classList.remove("is-invalid")
            genero.classList.add("is-valid")
            generoError.innerHTML=""
        }
        
        
    })    


    form.addEventListener("submit",e=>{
        
        inputAll.forEach(input=>{
            if(input.value===""){
                input.classList.add("is-invalid")
            }else{
                input.classList.remove("is-invalid")
                input.classList.add("is-valid")
            }
        })
       

})

})
