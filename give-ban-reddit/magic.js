var comment = document.getElementsByClassName("md");

for (var i = 0, l = comment.length; i < l; i++) {
    comment[i].innerHTML = comment[i].innerHTML.replace(/<p>(.|\n)*?<\/p>/g, '<p>༼ つ ◕_ ◕ ༽つ GIVE BAN ༼ つ ◕_ ◕ ༽つ</p>');
}