<template>
  <transition enterActiveClass="animated bounceInDown" leaveActiveClass="animated bounceOutUp">
      <div class="answerM">1234</div>
  </transition>
</template>
<style lang="scss"  scoped>
  .answerM{
      position: absolute;
      background: #fff;
      width: 18rem;
      min-height: 10rem;
    top:20vh;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
    box-shadow: 0 3px 18px #ddd;
  }
</style>
