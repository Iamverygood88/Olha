(() => {
    //this is a self invoking anonymous function
    console.log('fired!');
    // this is the same as print in python

    //these are the elements that you want to reference//
 var badge = document.querySelector("svg");

 var otherBadges1 = document.querySelectorAll('#icon1');
 var otherBadges2 = document.querySelectorAll('#icon2');
 var otherBadges3 = document.querySelectorAll('#icon3');
 var otherBadges4 = document.querySelectorAll('#icon4');
 var otherBadges5 = document.querySelectorAll('#icon5');
 var otherBadges6 = document.querySelectorAll('#icon6');
 var otherBadges7 = document.querySelectorAll('#icon7');
 var otherBadges8 = document.querySelectorAll('#icon8');
 var otherBadges9 = document.querySelectorAll('#icon9');
 var otherBadges10 = document.querySelectorAll('#icon10');

 function logBadgeId() {
    console.log(this.id);
    debugger;
 }

badge.addEventListener("click", logBadgeId);

otherBadges1.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
otherBadges2.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
otherBadges3.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
otherBadges4.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
otherBadges5.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
otherBadges6.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
otherBadges7.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
otherBadges8.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
otherBadges9.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));
otherBadges10.forEach(thisbadge => thisbadge.addEventListener("click", logBadgeId));

 //debugger; 
})();