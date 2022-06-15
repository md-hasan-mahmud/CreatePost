// main=area content
let postBody  = document.getElementById('postBody')

// form element
let image = document.getElementById('image')
let imageUrl = 'images/img.jpg'
let form = document.getElementById('form')
let remove = document.getElementById('remove')
let inputForm = document.getElementById('inputForm')

// header-area navber
let create = document.getElementById('create')

// click create new post
create.addEventListener('click',function(e) {
    e.preventDefault()
    inputForm.style.display = 'block'
    image.value = imageUrl
})
// createPostBox
function createPostBOx(title,comment) {
        let div = document.createElement('div')
        div.className = 'post'  

        let img = document.createElement('img')
        img.src = 'images/img.jpg'
        img.className = 'w-100'

        let div1 = document.createElement('div')
        div1.className = 'content'

        let h4 = document.createElement('h4')
        h4.innerHTML = title

        let p = document.createElement('p')
        p.innerHTML = comment

        div1.appendChild(h4)
        div1.appendChild(p)
                    
        div.appendChild(img)
        div.insertAdjacentElement('beforeend',div1)

        postBody.appendChild(div)
    }

// form control
form.addEventListener('submit',function(e) {
    e.preventDefault()
    let formData = {};
    [...this.elements].forEach(el=> {
        if(el.type!=='submit') {
            if(!el.value) {
                alert('Please Provide the Value')
                inputForm.style.display = 'none'
                throw new Error
            }else {
                formData[el.name] = el.value
                inputForm.style.display = 'none'
            }
        }
    })
    this.reset()
    createPostBOx(formData.title,formData.comment)
})

// cross icon click to remove form
remove.addEventListener('click',function(e) {
    inputForm.style.display = 'none'
})