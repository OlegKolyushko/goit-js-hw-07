const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const galleryRef = document.querySelector('#gallery');
  function createMarkup(arr){

    const listEl = arr.map(el=>{
        const liEl =  document.createElement('li');
        const imgEl = document.createElement('img');
        imgEl.alt = el.alt;
        imgEl.src = el.url;
        liEl.append(imgEl);
        return liEl;
    } )

      return listEl;
  };
  const markupArr = createMarkup(images);
  const markupArrString = markupArr.join('');

  function createStringMarkup(arr){
      const outHtml = arr.map(el=>el.outerHTML);
      return outHtml;
  };
  const markupString = createStringMarkup(markupArr).join('');
  galleryRef.insertAdjacentHTML('afterbegin', markupString);
