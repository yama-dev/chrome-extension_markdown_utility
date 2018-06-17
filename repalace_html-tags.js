
// Replace link-target-attribute tags.
// -> Bitbucket
let elemLinksDescription = document.querySelectorAll('#issues .issue-description p a[href^="http"]:not(.image-attachment)');
Array.prototype.forEach.call(elemLinksDescription, function(elem){
  elem.setAttribute('target','_blank');
});
let elemLinksComment = document.querySelectorAll('#issues #issues-comments p a[href^="http"]:not(.image-attachment)');
Array.prototype.forEach.call(elemLinksComment, function(elem){
  elem.setAttribute('target','_blank');
});
// -> GitHub
let elemLinksGithub = document.querySelectorAll('#show_issue .edit-comment-hide p a[href^="http"]:not([href^="https://github.com/"])');
console.log(elemLinksGithub);
Array.prototype.forEach.call(elemLinksGithub, function(elem){
  elem.setAttribute('target','_blank');
});

// Replace line feed tags.
// -> Bitbucket
let elemBrDescription = document.querySelectorAll('#issues .issue-description p');
Array.prototype.forEach.call(elemBrDescription, function(elem){
  let elemText = elem.innerHTML;
  elemText = elemText.replace(/(?<!\<br\>)\n/g,'<br>\n');
  elem.innerHTML = elemText;
});
let elemBrComment = document.querySelectorAll('#issues #issues-comments p');
Array.prototype.forEach.call(elemBrComment, function(elem){
  let elemText = elem.innerHTML;
  elemText = elemText.replace(/(?<!\<br\>)\n/g,'<br>\n');
  elem.innerHTML = elemText;
});

