<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Jacob Allen</strong>, a freshman McNeese State University student studying Computer Engineering.<br/>
        A big hobby of mine is programming, and I like to work on projects related to game development in my free time.
      </div>

      <div style="margin-top: 20px;">I have a video game out on Steam called <router-link to="/game-projects">Indirection</router-link>, and a few other projects.</div>
  </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>