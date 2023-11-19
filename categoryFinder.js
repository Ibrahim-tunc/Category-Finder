const config = {
    desktopWidth: "1400px",
    mobileWidth: "320px",
    img: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1303_20231012151028247.jpg"
  };
  
  const colors = [
    {
        name: "Siyah",
        code: "#000",
        dataId:"vl-siyah"
    },
    {
        name: "Beyaz",
        code: "black",
        dataId:"vl-beyaz"
    },
    {
        name: "Bej",
        code: "#d39f7c",
        dataId:"vl-bej"
    },
    {
        name: "Taba",
        code: "#5f0505",
        dataId:"vl-taba"
    },
  ];
  
  const shoes = [
    {
        name: "Sneaker",
        dataId: "vl-sneaker",
        src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1303_20231015143851372.png"
    },
    {
        name: "Bot",
        dataId: "vl-bot",
        src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1303_20231015143933838.png"
    },
    {
        name: "Çizme",
        dataId: "vl-cizme",
        src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1303_20231015144007817.png"
    },
    {
        name: "Topuklu",
        dataId: "vl-topuklu",
        src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1303_20231015144027017.png"
    },
    {
        name: "Loafer",
        dataId: "vl-loafer",
        src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1303_20231015144046498.png"
    },
    {
        name: "Babet",
        dataId: "vl-babet",
        src: "https://imgvisilabsnet.azureedge.net/banner/uploaded_images/307_1303_20231015144100742.png"
    },
    
  ];
  
  const links = {
    "vl-sneaker": 
    {
        "vl-siyah": "https://www.ninewest.com.tr/spor-ayakkabi?renk=siyah",
        "vl-beyaz": "https://www.ninewest.com.tr/spor-ayakkabi?renk=beyaz",
        "vl-bej": "https://www.ninewest.com.tr/spor-ayakkabi?renk=bej",
        "vl-taba": "https://www.ninewest.com.tr/spor-ayakkabi?renk=kahverengi"
    },
    "vl-bot": 
    {
        "vl-siyah": "https://www.ninewest.com.tr/bot?renk=siyah",
        "vl-beyaz": "https://www.ninewest.com.tr/bot?renk=beyaz",
        "vl-bej": "https://www.ninewest.com.tr/bot?renk=bej",
        "vl-taba": "https://www.ninewest.com.tr/bot?renk=kahverengi"
    },
    "vl-cizme": 
    {
        "vl-siyah": "https://www.ninewest.com.tr/cizme?renk=siyah",
        "vl-beyaz": "https://www.ninewest.com.tr/cizme?renk=beyaz",
        "vl-bej": "https://www.ninewest.com.tr/cizme?renk=bej",
        "vl-taba": "https://www.ninewest.com.tr/cizme?renk=kahverengi"
    },
    "vl-topuklu": 
    {
        "vl-siyah": "https://www.ninewest.com.tr/topuklu-ayakkabi?renk=siyah",
        "vl-beyaz": "https://www.ninewest.com.tr/topuklu-ayakkabi?renk=beyaz",
        "vl-bej": "https://www.ninewest.com.tr/topuklu-ayakkabi?renk=bej",
        "vl-taba": "https://www.ninewest.com.tr/topuklu-ayakkabi?renk=kahverengi"
    },
    "vl-loafer":
    {
        "vl-siyah": "https://www.ninewest.com.tr/loafer?renk=siyah",
        "vl-beyaz": "https://www.ninewest.com.tr/loafer?renk=beyaz",
        "vl-bej": "https://www.ninewest.com.tr/loafer?renk=kahverengi",
        "vl-taba": "https://www.ninewest.com.tr/loafer?renk=bej"
    },
    "vl-babet":
    {
        "vl-siyah": "https://www.ninewest.com.tr/babet?renk=siyah",
        "vl-beyaz": "https://www.ninewest.com.tr/babet?renk=bej",
        "vl-bej": "https://www.ninewest.com.tr/babet?renk=kahverengi",
        "vl-taba": "https://www.ninewest.com.tr/babet?renk=beyaz"
    }
  };
  
  
  FirePopup();
  function FirePopup() {
    if (!document.querySelector("#vl-finder-container")) {
        var style = document.createElement("style");
        style.innerHTML = `
        #vl-finder-container{
          margin: 1em 0;
        }
  
        #vl-finder-container .vl-finder {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1em;
            background-color: white;
            position: relative;
        }
  
        #vl-finder-container .vl-header{
            font-size: 1.7vw;
            text-align: center;
            position: relative;
            padding: 0.5em;
            color: #6d6a6a;
        }
  
        #vl-finder-container .vl-header::before,
        #vl-finder-container .vl-header::after{
            content: "";
            position: absolute;
            width: 37vw;
            height: 1px; 
            background-color: #6d6a6a; 
            top: 50%; 
            transform: translateY(-50%);
        }
  
        #vl-finder-container .vl-header::before{
            left: 0;
        }
  
        #vl-finder-container .vl-header::after{
            right: 0;
        }
  
        #vl-finder-container .vl-category-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
  
        #vl-finder-container .vl-finder-container{
            background-color: #ededed;
            display: flex;
            flex-direction: column;
            gap: 4vw;
            align-items: center;
            justify-content: center;
        }
  
        #vl-finder-container .vl-colors{
            display: inline-flex;
            gap: 2.2vw;
            margin-top: 1vw;
        }
  
        .vl-custom-radio-shoe, .vl-custom-radio-color {
            position: relative;
            display: inline-block;
            cursor: pointer;
        }
  
        .vl-custom-radio-shoe{
            border-bottom: 1px solid gray;
        }
        .vl-custom-radio-shoe:hover{
          border-bottom: 1px solid black;
        }
          
        .vl-hidden-radio {
            display: none;
        }
  
        .vl-radio-label {
            position: relative;
            font-size: 1vw;
            font-weight: bold;
        }
          
        .vl-radio-label::after {
            content: "";
            position: absolute;
            left: 16%;
            top: -1.2vw;
            transform: translateY(-50%);
            width: 1.5vw;
            height: 1.5vw;
            background-color: transparent;
            border-radius: 50%;
        }
  
        .vl-radio-label[data-id="vl-beyaz"]{
          color: black;
          -webkit-text-fill-color: white;
          -webkit-text-stroke: 1px black;
          font-weight: unset;
        }
  
        .vl-radio-label[data-id="vl-siyah"]::after{
            box-shadow: 0 0 0 6px black;
        }
  
        .vl-radio-label[data-id="vl-beyaz"]::after{
            box-shadow: 0 0 0 6px white;
        }
  
        .vl-radio-label[data-id="vl-bej"]::after{
            box-shadow: 0 0 0 6px #d39f7c;
        }
  
        .vl-radio-label[data-id="vl-taba"]::after{
            box-shadow: 0 0 0 6px #5f0505;
        }
          
        .vl-hidden-radio:checked + .vl-radio-label[data-id="vl-siyah"]::after {
            background-color: black;
        }
  
        .vl-hidden-radio:checked + .vl-radio-label[data-id="vl-beyaz"]::after {
            background-color: white;
        }
  
        .vl-hidden-radio:checked + .vl-radio-label[data-id="vl-bej"]::after {
            background-color: #d39f7c;
        }
  
        .vl-hidden-radio:checked + .vl-radio-label[data-id="vl-taba"]::after {
            background-color: #5f0505;
        }
  
        #vl-finder-container .vl-shoes{
            display: grid;
            grid-template-rows: auto auto;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
        }
  
        #vl-finder-container .vl-shoes .vl-custom-radio-shoe:nth-child(5){
            grid-row: 2;
            grid-column: 2;
        }
  
        #vl-finder-container .vl-shoes .vl-custom-radio-shoe:nth-child(6){
            grid-row: 2;
            grid-column: 3;
        }
          
        #vl-finder-container .vl-radio-image {
            width: 7vw;
            height: 7vw;
            background-size: cover;
            background-position: center;
        }
  
        #vl-finder-container .vl-hidden-radio:checked + .vl-radio-image {
          border-bottom: 3px solid;
       }
  
        #vl-finder-container .vl-search-btn {
          position: absolute;
          bottom: 3vw;
          right: 5vw;
          background: white;
          padding: 0.8vw 1vw;
          border-radius: 5px;
          cursor: pointer;
          color: black;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          border: 2px solid #ededed;
        }
  
        #vl-finder-container .vl-search-btn:hover{
          border: 2px solid #6d6a6a;
        }
        
        @media only screen and (max-width: 768px) {
            #vl-finder-container .vl-finder {
                width:${config.mobileWidth};
            }
        
            #vl-finder-container .vl-finder-image {
                width:${config.mobileWidth};
            }
        }
        `;
        document.head.append(style);
  
        const finder = document.createElement("div");
        finder.id = "vl-finder-container";
        finder.innerHTML = `
        <div class="vl-finder">
            <span class="vl-header">Kategori ve Rengini Seç</span>
            <div class="vl-category-container">
                <img src="${config.img}">
                <div class="vl-finder-container">
                    <div class="vl-shoes">
                    </div>
                    <div class="vl-colors">
                    </div>
                </div>
            </div>
            <span class="vl-search-btn">Ürünleri Bul</span>
        </div>
        `;
        document.querySelector('a[data-name="related kategori"]').parentElement.parentElement.parentElement.parentElement.parentElement.append(finder);
  
        shoesComponent();
        colorComponent();
        selectReboot();
        search();
  
  
        function selectReboot() {
            const shoes = finder.querySelectorAll('.vl-custom-radio-shoe');
            const colorRadios = finder.querySelectorAll('.vl-custom-radio-color input');
            shoes.forEach(shoe => {
                shoe.addEventListener('click', () => {
                    colorRadios.forEach(radio => {
                        radio.checked = false;
                    });
                });
            });
        }
  
        function shoesComponent() {
            const shoesContainer = finder.querySelector('.vl-shoes');
            shoes.forEach(shoe => {
                createImgRadio(shoesContainer, shoe.src, shoe.name, shoe.dataId);
            });
        }
  
        function colorComponent() {
            const colorContainer = finder.querySelector('.vl-colors');
            colors.forEach(color => {
                createColorRadio(colorContainer, color.name, color.code, color.dataId);
            });
        }
  
        function createColorRadio(target, colorName, colorCode, dataId){
            target.innerHTML += 
            `
            <label class="vl-custom-radio-color">
                <input type="radio" name="vl-color" class="vl-hidden-radio" id="${dataId}">
                <span style="color:${colorCode}" class="vl-radio-label" data-id="${dataId}">${colorName}</span>
            </label>
            `;
        }
  
        function createImgRadio(target, src, name, dataId){
            target.innerHTML += `
                <label class="vl-custom-radio-shoe">
                    <input type="radio" name="vl-shoe" class="vl-hidden-radio" id="${dataId}">
                    <div style="background-image: url('${src}');" class="vl-radio-image"></div>
                </label>
            `;
        }
  
        function search(){
          const btn = finder.querySelector('.vl-search-btn');
          btn.addEventListener('click', () => {
            const colorChecked = finder.querySelector("input[name='vl-color']:checked");
            const shoeChecked = finder.querySelector("input[name='vl-shoe']:checked");
            if(colorChecked && shoeChecked){
              location.href =  links[shoeChecked.id][colorChecked.id];
            }
          });
        }
    }
  }
