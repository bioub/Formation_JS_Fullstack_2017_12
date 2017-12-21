const contact = {
  prenom: 'Romain',
  helloSync() {
    console.log(`Bonjour je m'appelle ${this.prenom}`);
  },
  helloBind() {
    setTimeout(this.helloSync.bind(this), 100);
  },
  helloAsyncClosure() {
    const that = this;
    setTimeout(function() {
      console.log(`Bonjour je m'appelle ${that.prenom}`);
    }, 100);
  },
  helloArrow() {
    setTimeout(() => {
      console.log(`Bonjour je m'appelle ${this.prenom}`);
    }, 100);
  },
};

contact.helloSync();
contact.helloAsyncClosure();
contact.helloBind();
