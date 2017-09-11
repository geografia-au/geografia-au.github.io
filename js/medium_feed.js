/*
* Example Usage:
*
*   $.get('http://cors.io/sprunge.us/ILRc', function(data) {
*     rss2json(data);
*   });
*
*/

window.rss2json = function(feed) {
  String.prototype.c = function() {
        var newStr = this.replace("<![CDATA[", "").replace("]]>", "");
        return newStr;
  };
  var json = {
      title: feed.querySelector('title').innerHTML.c(),
      description: feed.querySelector('description').innerHTML.c(),
      link: feed.querySelector('link').innerHTML.c(),
      image: {
          url: feed.querySelector('image url').innerHTML.c(),
          title: feed.querySelector('image title').innerHTML.c(),
          link: feed.querySelector('image link').innerHTML.c()
      },
      // author: feed.querySelector('author').innerHTML.c(),
      items: []
  };
  for(i=0; i<feed.querySelectorAll('item').length; i++) {
      itm = feed.querySelectorAll('item')[i];
      json.items[i] = {
          title: itm.querySelector('title').innerHTML.c(),
          description: itm.children[itm.children.length-1].innerHTML.c(),
          link: itm.querySelector('link').innerHTML.c(),
          pubDate: itm.querySelector('pubDate').innerHTML.c()
      };
  }
  return json;
};

function toListMenuItem(post) {
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.href = post.link;
  a.textContent = post.title;
  return a;
};

function toBlogTeaser(post) {
  var column = document.createElement('div');
  column.className = "large-4 medium-4 columns";
  // post
  var dompost = document.createElement('div');
  dompost.className = "mod modBlogPost";
  var divpost = document.createElement('div');
  divpost.className = "content";
  // header
  var a = document.createElement("a");
  a.href = post.link;
  a.textContent = post.title;
  var header = document.createElement("h4");
  header.style.minHeight = "40px";
  header.appendChild(a);
  var date = document.createElement("p");
  date.className = "date";
  date.textContent = post.pubDate
  var body = jQuery.parseHTML(post.description);
  jQuery('.medium-feed-link', body).remove();
  var image = jQuery('img', body)[0];
  var path = image.src;
  var iDiv = document.createElement("div");
  iDiv.style.maxHeight = "80x";
  iDiv.style["background-image"] = "url(" + path + ")";
  iDiv.style["background-position"] = "50% 50%";
  iDiv.style["background-size"] = "100% auto";
  iDiv.style.height = "100px";

  image.parentElement.insertBefore(iDiv, image);
  image.remove();
  divpost.appendChild(header);
  divpost.appendChild(date);
  divpost.appendChild(iDiv);
  dompost.appendChild(divpost);
  column.appendChild(dompost);
  return column;
};

function getCORS() {
  var regx = new RegExp("https://geografia.com.au(/.*)")

  return(regx.test(window.location.href) ?
     "" : "https://cors-anywhere.herokuapp.com/")
}

setTimeout(function () {
  jQuery.get("https://cors-anywhere.herokuapp.com/https://medium.com/feed/geografia", function(data) {
    {
      let xmlContents = rss2json(data);
      var posts = xmlContents.items;
      posts.forEach(function (post) {
        jQuery('.recent_from_medium').each(function (index, ul) {
          ul.appendChild(toListMenuItem(post));
          ul.appendChild(document.createElement('br'));
          return ul;
        });
      });
      posts.slice(0,3).forEach(function(post) {
        jQuery('.row.blogs').each(function (index, ul) {
          ul.appendChild(toBlogTeaser(post));
        });
      });
    }
  });
}, 2);
