<template>
  <Header />
  <router-view />
  <FeedBack />
  <Footer />
</template>
<script>
import Header from "@/components/header/Header";
import FeedBack from "@/components/footer/FeedBack";
import Footer from "@/components/footer/Footer";
export default {
  components: {
    Header,
    Footer,
    FeedBack,
  },
  mounted() {
    this.$store.dispatch("loadProducts");
    this.$store.dispatch("loadProductsFromCart");
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Lato", sans-serif;
}
#app {
  position: relative;
}

a {
  text-decoration: none;
}

a:hover {
  color: #f16d7f !important;
}

li {
  list-style: none;
}

.pink {
  color: #ef5b70;
}

a,
svg,
button,
input[type="button"],
input[type="submit"] {
  transition: 0.3s;
}

.hidden {
  position: absolute;
  left: -9999px;
  margin: 0;
  font-size: 1px;
  //opacity: 0;
}

summary::-webkit-details-marker {
  display: none;
}

.form-input {
  padding-left: 16px;
  padding-top: 13px;
  padding-bottom: 13px;
  width: 100%;
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  color: #b1b1b1;
  border: 1px solid #a4a4a4;
  margin-top: 20px;
  box-sizing: border-box;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #a4a4a4;
    outline: 0;
  }
}

#catalog {
  .card {
    &__items {
      padding-bottom: 48px !important;
    }

    padding-bottom: 14px !important;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ebebeb;
  width: fit-content;
  margin: 0 auto;
  box-sizing: border-box;

  li {
    padding: 15px;

    a {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      color: #c4c4c4;
    }

    a.active {
      color: #ef5b70;
    }

    &:nth-child(7) {
      padding-right: 0;
    }

    &:nth-child(9) {
      padding-left: 0;
    }
  }

  .disable {
    padding-left: 0px;
    padding-right: 0px;
  }
}

#menu {
  display: none;
}

.registration {
  padding-top: 65px;
  padding-bottom: 92px;
  display: flex;
  justify-content: space-between;
  gap: 128px;

  &__name-group {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
  }

  .group-check-box {
    display: flex;
    align-items: center;
    padding-top: 31px;
    padding-bottom: 33px;

    input[type="radio"] {
      height: 17px;
      width: 17px;
      margin-right: 10px;
    }

    label {
      margin-right: 20px;
    }
  }

  &__name-text {
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    color: #b1b1b1;
    padding: 15px 0 39px 0;
  }

  &__form-btn {
    display: inline-block;
    width: auto;

    svg {
      margin-left: 20px;
      fill: #ffffff;
    }

    &:hover {
      border: 1px solid #a4a4a4;
    }
  }
}

.registration__inform {
  &-title {
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding-bottom: 32px;
  }

  &-description {
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding-bottom: 27px;
  }

  &-items {
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }

  &-item {
    list-style-image: url("/img/marker-list.png");
    padding-bottom: 16px;
    margin-left: 26px;
    padding-left: 22px;
  }
}

@mixin registration-tablet {
  .registration__inform-title {
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 30px;
  }

  .registration__inform-description {
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 30px;
  }

  .registration__inform-item {
    padding-bottom: 16px;
    margin-left: 26px;
    padding-left: 22px;
    font-size: 16px;
    line-height: 19px;
  }

  .group-check-box {
    font-size: 11px;
  }

  .order__form-submit {
    font-size: 14px;
    line-height: 16px;
  }

  .registration {
    gap: 22px;
  }

  .registration__inform {
    width: 49%;
  }

  .registration__form {
    width: 49%;
  }
}

@mixin registration-mobile {
  .registration {
    gap: 40px;
    flex-direction: column;
  }

  .registration__inform {
    width: 100%;
  }

  .registration__form {
    width: 100%;
  }
}

@import "./assets/sass/index";

@import "assets/sass/adaptiv";
</style>
