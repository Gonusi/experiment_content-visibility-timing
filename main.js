//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
function initObserver(elem) {
  let options = {
    threshold: [0.75],
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(elem);
}

let timeLastVisible = 0;
function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      timeLastVisible = entry.time;
      console.log("Going in.");
    } else if (timeLastVisible) {
      const onScreenDuration = (entry.time - timeLastVisible) / 1000;
      timeLastVisible = 0;
      console.log(`Going out. Was on screen for: ${onScreenDuration}s`);
    }
  });
}

const loadedPhotoElem = document.getElementById("photo");
initObserver(loadedPhotoElem);
