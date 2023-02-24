let articlescontainer = document.querySelector(".aticles");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resValue) => {
    return resValue.json();
  })
  .then((articles) => {
    console.log(articles);
    articles.forEach((article) => {
      let newArtBox = document.createElement("div");
      newArtBox.className = "art-box";
      let newArtTitle = document.createElement("div");
      newArtTitle.className = "art-title";
      newArtTitle.innerHTML = article.title;
      let newArtID = document.createElement("div");
      newArtID.className = "art-id";
      newArtID.innerHTML = ` article No. ${article.id}`;
      newArtBox.appendChild(newArtTitle);
      newArtBox.appendChild(newArtID);
      let newArtbody = document.createElement("div");
      newArtbody.className = "art-body";
      newArtBox.appendChild(newArtbody);
      let newArttext = document.createElement("div");
      newArttext.className = "text";
      newArttext.innerHTML = article.body;
      let newreadmore = document.createElement("a");
      newreadmore.innerHTML = "Read More >>";
      newArtbody.appendChild(newArttext);
      newreadmore.href = "#";
      newArtbody.appendChild(newreadmore);
      articlescontainer.appendChild(newArtBox);
    });
  });
