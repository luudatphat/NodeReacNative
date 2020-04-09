console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Traversy Mediassss!",
    icon: "https://www.google.com/logos/doodles/2020/stay-home-save-lives-6753651837108752-s.png"
  });
});