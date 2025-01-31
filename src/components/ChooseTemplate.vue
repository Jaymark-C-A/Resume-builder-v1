<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4" style="background-color: #16213E; height: 100vh;">
        <div class="container text-light text-center mt-5">
          <h1 class="fw-bold">
            <span class="rocket">🚀</span> Build Your Perfect Resume in Minutes!
          </h1>
          <p class="lead">Create a resume with ease using our simple resume builder.</p>
        </div>

        <div class="container text-light text-center mt-5">
          <h1>About My Resume Builder</h1>
          <p>I developed this resume builder to assist individuals who find it challenging to create a professional resume but still manage to stay active on social media. It offers modern templates designed to help you craft a standout resume and take the next step in your career.</p>        
        </div>
      </div>
      <div class="col-lg-8">
        <div class="choose-template">
          <div class="container">
            <div class="row justify-content-center">
              <div class="container text-center mb-3">
                <h1 class="rocket">Welcome to Resume Builder</h1>
                <p>Start building your resume now with our easy-to-use templates.</p>
              </div>
              <div v-for="(template, index) in templates" :key="index" class="col-md-4 mb-4">
                <div class="card" @click="goToTemplate(template.path)">
                  <img :src="template.previewImage" class="card-img-top" :alt="template.name" />
                  <div class="card-body">
                    <h5 class="card-title">{{ template.name }}</h5>
                    <p class="card-text">{{ template.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      templates: [
        {
          name: "Modern Resume",
          description: "A clean and modern resume template.",
          previewImage: "/img/modern.png",
          path: "/modern/resume",
        },
        {
          name: "Standard Resume",
          description: "A professional and formal resume layout.",
          previewImage: "/img/standard.png",
          path: "/standard/resume",
        },  
      ],
    };
  },
  methods: {
    goToTemplate(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.choose-template {
  text-align: center;
  margin-top: 40px;
}

.card {
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card img {
  height: 200px;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
}

.card:hover img {
  opacity: 0.85;
}

.card-body {
  text-align: center;
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: bold;
}

.row {
  display: flex;
  justify-content: center;
}

.col-md-4 {
  max-width: 300px;
}
@keyframes moveRocket {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.rocket {
  display: inline-block;
  font-size: 3rem;
  animation: moveRocket 1s infinite;
}
</style>
