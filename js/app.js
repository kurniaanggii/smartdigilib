const container = document.querySelector(".container")
const coffees = [
  { name: "From Research To Manuscript", image: "images/book1.jpg", link:"https://www.amazon.com/Research-Manuscript-Guide-Scientific-Writing/dp/1402094663#:~:text=Written%20in%20simple%2C%20straightforward%20language,of%20a%20polished%20scientific%20paper." },
  { name: "Book Probability", image: "images/book2.jpg", link: "https://www.amazon.com/Probability-Springer-Texts-Statistics-Pitman/dp/0387979743"},
  { name: "HCI Models, Theories, and Frameworks", image: "images/book3.jpg", link:"https://www.amazon.com/HCI-Models-Theories-Frameworks-Multidisciplinary/dp/1558608087#:~:text=HCI%20Models%2C%20Theories%2C%20and%20Frameworks%20fills%20a%20huge%20void%20in,method%20to%20solve%20practical%20problems." },
  { name: "Communication Networks Fundamental Concepts", image: "images/book4.jpg", link:"https://www.amazon.com/Communication-Networks-Fundamental-Concepts-Architectures/dp/0070228396" },
  { name: "Managing SW Project", image: "images/book5.jpg", link:"https://www.amazon.com/Managing-Software-Projects-Frank-Tsui/dp/0763725463" },
  { name: "Book All Of Statistics", image: "images/book6.jpg" , link:"https://www.amazon.com/All-Statistics-Statistical-Inference-Springer/dp/1441923225"},
  { name: "Methods for Applied Macroeconomic Research", image: "images/book7.jpg", link:"https://www.amazon.com/Methods-Applied-Macroeconomic-Research-Canova/dp/0691115044" },
  { name: "Software Project Secrets Why Software Projects Fail", image: "images/book8.jpg", link:"https://www.amazon.com/exec/obidos/ASIN/1590595505/jr_bunk-20" },
  { name: "Understanding Mobile Human–Computer Interaction", image: "images/book9.jpg", link:"https://www.amazon.com/Understanding-Mobile-Human-Computer-Interaction-Psychological-ebook/dp/B000PY3D0K" },
]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image, link }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="${link}">Read more</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }