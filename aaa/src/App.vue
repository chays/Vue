<template>
  <div id="app">
    <Header></Header>
    <Container></Container>
    <Footer></Footer>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Container from '@/components/Container.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Container,
    Footer
  }
}
</script>