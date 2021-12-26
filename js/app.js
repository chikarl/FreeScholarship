const questionTxt1 = document.querySelector('.quest1')
const questionTxt2 = document.querySelector('.quest2')
const questionTxt3 = document.querySelector('.quest3')
const loading = document.querySelector('.loading')
const lastPage = document.querySelector('.last_page')
const congrat = document.querySelector('.congrat')
const gif = document.querySelector('.gif')


const ans1 = document.querySelectorAll('.anses1')
const ans2 = document.querySelectorAll('.anses2')
const ans3 = document.querySelectorAll('.anses3')



ans1.forEach(item => {
 item.addEventListener('click',() =>{
  questionTxt1.classList.remove('show')
  gif.classList.add('show')
  setTimeout(function(){
    gif.classList.remove('show')
    questionTxt2.classList.add('show')
  }, 2000)
 })
})

ans2.forEach(item => {
 item.addEventListener('click',() =>{
  questionTxt2.classList.remove('show')
  gif.classList.add('show')
  setTimeout(function(){
    gif.classList.remove('show')
    questionTxt3.classList.add('show')
  }, 2000)
 })
 })

ans3.forEach(item => {
 item.addEventListener('click',() =>{
  questionTxt3.classList.remove('show')
  gif.classList.add('show')
  setTimeout(function(){
    gif.classList.remove('show')
    loading.classList.add('show')
    setTimeout(function(){
      loading.classList.remove('show')
      congrat.classList.remove('show')
      lastPage.classList.add('show')
    }, 3000)
  }, 1000)

  
 })
})

