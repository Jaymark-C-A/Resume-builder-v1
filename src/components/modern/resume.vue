<template>
    <div class="container-fluid bg-secondary">
      <div class="row">
        <div class="col-lg-5 overflow-auto px-lg-2 px-0" style="height: 100vh;">
            <main class="container-fluid mt-3  rounded-4">
                <!-- Resume Creation Form -->
                <div class="form-container text-light mx-lg-2" style="background-color: #343a40; border: 1px solid white;">
                    <div class="d-flex justify-content-center mb-2">
                        <img src="/img/logo.png" alt="" width="50%" height="auto">
                    </div>
                    <h2 class="mb-3 fs-5 fw-bolder text-center" style="letter-spacing: 3px;">Customized Your Modern Resume</h2>
                    <!-- Progress Bar -->
                    <label class="form-label d-none d-lg-block mb-1 text-light" style="font-size: 10px; letter-spacing: 1px;">Progress Bar</label>
                    <div class="progress mb-3">
                        <div
                        class="progress-bar"
                        role="progressbar"
                        :style="{ width: (currentStep / 4) * 100 + '%' }"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        ></div>
                    </div>
                    <form @submit.prevent="submitForm">
                        <!-- Profile Information Section -->
                        <div v-show="currentStep === 0" class="step">

                              <!-- Image Upload Section -->
                            <div class="mb-3">
                              <label for="profileImage" class="form-label">Upload Profile Picture</label>
                              <input type="file" @change="handleImageUpload" accept="image/*" />                          
                            </div>
                            <label for="fullName" class="form-label">Full Name & Job Position</label>
                            <div class="mb-3 d-flex gap-2">
                            <input v-model="form.fullName" type="text" class="form-control w-50" id="fullName" placeholder="Enter your full name" required />
                            <input v-model="form.position" type="text" class="form-control w-50" id="fullName" placeholder="Enter your job position" required />

                            </div>
                            <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Enter your email address" required />
                            </div>
                            <div class="mb-3">
                            <label for="phone" class="form-label">Phone Number</label>
                            <input v-model="form.phone" type="number" class="form-control" id="phone" placeholder="Enter your phone number" required />
                            </div>
                            <div class="mb-3">
                            <label for="address" class="form-label">Address</label>
                            <input v-model="form.address" type="text" class="form-control" id="address" placeholder="Enter your full Address" required />
                            </div>
                        </div>
                        <!-- Education Section -->
                        <div v-show="currentStep === 1 && currentView === 'tertiary'" class="step">
                            <div class="section-title my-1 fs-4 fw-bold text-center text-light">Educational Background</div>
                            <div class="mb-3">
                            <label for="degree" class="form-label">Degree/Strand</label>
                            <input v-model="form.degree" type="text" class="form-control" id="degree" placeholder="Enter your degree" required />
                            </div>
                            <div class="mb-3">
                            <label for="institution" class="form-label">Institution</label>
                            <input v-model="form.institution" type="text" class="form-control" id="institution" placeholder="Enter your institution name" required />
                            </div>
                            <div class="mb-3">
                            <label for="gradYear" class="form-label">Graduation Year</label>
                            <input v-model="form.gradYear" type="text" class="form-control" id="gradYear" placeholder="Enter your graduation year (e.g., Jan 2020 - Dec 2021)" required />
                            </div>
                            <div class="d-flex justify-content-end gap-2">
                                <button @click="currentView = 'tertiary'" class="p-2 py-0 bg-primary text-light" type="button">Tertiary</button>
                                <button @click="currentView = 'secondary'" class="p-2 py-0" type="button">Secondary</button>
                            </div>
                        </div>
                        <!-- secondary Education -->
                        <div v-show="currentStep === 1 && currentView === 'secondary'" class="step">
                            <div class="section-title my-1 fs-4 fw-bold text-center text-light">Educational Background</div>
                            <div class="mb-3">
                            <label for="institution" class="form-label">Institution</label>
                            <input v-model="form.institutionHignSchool" type="text" class="form-control" id="institution" placeholder="Enter your institution name" required />
                            </div>
                            <div class="mb-3">
                            <label for="gradYear" class="form-label">Graduation Year</label>
                            <input v-model="form.gradYearHighschool" type="text" class="form-control" id="gradYear" placeholder="Enter your graduation year (e.g., Jan 2020 - Dec 2021)" required />
                            </div>
                            <div class="d-flex justify-content-end gap-2">
                                <button @click="currentView = 'tertiary'" class="p-2 py-0" type="button">Tertiary</button>
                                <button @click="currentView = 'secondary'" class="p-2 py-0 bg-primary text-light" type="button">Secondary</button>
                            </div>
                        </div>
                        <!-- About me Section -->
                        <div v-show="currentStep === 2" class="step">
                          <p class="section-title fs-4 my-2 fw-bold text-center text-light">ABOUT ME</p>
                          <div class="mb-2">
                            <textarea v-model="form.aboutMe" class="form-control" rows="2" placeholder="About Me" required></textarea>
                          </div>
                        <!-- Skills Section -->
                          <p class="section-title fs-4 my-2 fw-bold text-center text-light">Skills</p>
                          <div class="mb-2">
                          <textarea v-model="form.skills" class="form-control" id="skills" rows="2" placeholder="Enter your skills" required></textarea>
                          </div>

                          <!-- Language Section -->
                          <p class="section-title fs-4 my-2 fw-bold text-center text-light">Language</p>
                          <div class="mb-2">
                          <textarea v-model="form.language" class="form-control" id="language" rows="2" placeholder="Enter your Languages" required></textarea>
                          </div>
                        </div>
                        <!-- Experience Section -->
                        <div v-show="currentStep === 3" class="step" >
                          <div class="section-title mt-0 mb-2 fs-4 fw-bold text-center text-light">Professional Experience</div>
                          <!-- Dynamic Experience Fields -->
                          <div v-for="(experience, index) in form.experiences" :key="index" class="mb-5">
                            <div class="mb-1">
                              <label :for="'jobTitle' + index" class="form-label">Job Title</label>
                              <input v-model="experience.jobTitle" type="text" class="form-control" :id="'jobTitle' + index" placeholder="Enter your job title" required />
                            </div>
                            <div class="mb-1">
                              <label :for="'companyName' + index" class="form-label">Company Name</label>
                              <input v-model="experience.companyName" type="text" class="form-control" :id="'companyName' + index" placeholder="Enter company name" required />
                            </div>
                            <div class="mb-1">
                              <label :for="'jobDuration' + index" class="form-label">Duration</label>
                              <input v-model="experience.jobDuration" type="text" class="form-control" :id="'jobDuration' + index" placeholder="Enter job duration (e.g., Jan 2020 - Dec 2021)" required />
                            </div>
                            <div class="mb-1">
                              <label :for="'description' + index" class="form-label">Description</label>
                              <input v-model="experience.description" type="text" class="form-control" :id="'description' + index" placeholder="Enter job duration description" required />
                            </div>
                          </div>
                          <!-- Add Experience Button -->
                          <button class="form-control btn btn-primary" @click="addExperience">Add</button>
                        </div>

                        <!-- Reference Section -->
                        <div v-show="currentStep === 4" class="step" >
                          <div class="section-title mt-0 mb-2 fs-4 fw-bold text-center text-light">Character Reference</div>
                          <!-- Dynamic Experience Fields -->
                          <div v-for="(reference, index) in form.reference" :key="index" class="mb-4">
                            <div class="mb-1">
                              <label :for="'name' + index" class="form-label">Name</label>
                              <input v-model="reference.name" type="text" class="form-control" :id="'name' + index" placeholder="Enter the name" required />
                            </div>
                            <div class="mb-1">
                              <label :for="'contact' + index" class="form-label">Contact Number</label>
                              <input v-model="reference.contact" type="number" class="form-control" :id="'contact' + index" placeholder="Enter contact number" required />
                            </div>
                          </div>
                          <!-- Add Experience Button -->
                          <button class="form-control btn btn-primary" @click="addreference">Add</button>
                        </div>

                        <!-- Navigation Buttons -->
                        <div class="d-flex justify-content-between gap-2 mt-2" >
                            <button type="button" @click="prevStep" class="form-control  btn btn-secondary py-2 px-4" style="font-size: 14px;" :style="{ display: currentStep === 0 ? 'none' : 'inline-block'}">Previous</button>
                            <button type="button" @click="nextStep" style="font-size: 14px;" class="form-control btn btn-primary py-2 px-3">{{ currentStep === 4 ? 'View Resume' : 'Next' }}</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
        <div class="resume-con col-lg-7 mt-3 px-lg-5 overflow-auto px-0 d-none d-lg-block" style="height: 100vh;">
            <!-- Resume Display Section -->
             <div class="container-fluid" style=" border: 5px solid white;">
              <div class="row">
                <div class="col-lg-5 px-3" style="height: 150vh; background-color: #16213E;">
                <!-- Image Preview (Uploaded Image or Default) -->
                <div class="d-flex justify-content-center mt-5 mb-5">
                      <img
                        v-if="form.profileImagePreview"
                        :src="form.profileImagePreview"
                        alt="Profile Preview"
                        width="150"
                        height="150"
                        style="border: 5px solid lightgray; border-radius: 50%;"
                      />
                      <img
                        v-else
                        src="/src/assets/img/2x2.webp"
                        alt="Default Profile"
                        width="150"
                        height="150"
                        style="border: 5px solid lightgray; border-radius: 50%;"
                      />
                    </div>
                  <!-- CONTACT -->
                  <h5 class="fw-bold text-light">Contact</h5>
                  <div class="contact py-3 pb-0 text-light" style="font-size: 11px; border-top: 1px solid gray;">
                    <p><i class="fas fa-location-dot"></i> {{ form.address || 'Address' }}</p>
                    <p><i class="fas fa-envelope"></i> {{ form.email || 'account@gmail.com' }}</p>
                    <p><i class="fas fa-phone"></i> {{ form.phone || '09XX-XXXX-XXX' }}</p>
                  </div>
                  <!-- EDUCATION -->
                  <h5 class="fw-bold text-light">Education</h5>
                  <div class="contact text-light" style="font-size: 12px; border-top: 1px solid gray; ">
                    <div class="resume-section">
                      <div class="text-light pt-1" style="">
                          <p class="mb-0" style="font-size: 11px;"><strong>{{ form.degree || 'Degree:' }}</strong></p>
                          <p class="mb-0" style="font-size: 11px;">{{ form.institution || form.institutionHignSchool || 'Institution:' }}</p>
                          <p style="color: gray;">{{ form.gradYear || 'Graduation Year:' }}</p>
                      </div>
                    </div>
                    <div class="resume-section mt-3">
                      <div class="text-light" style="line-height: 2px;">
                          <p class="fw-bold" style="font-size: 11px;">{{ form.institutionHignSchool || 'Institution:' }}</p>
                          <p style="color: gray;">{{ form.gradYearHighschool || 'Graduation Year:' }}</p>
                      </div>
                    </div>
                  </div>
                  <!-- SKILLS -->
                  <h5 class="fw-bold text-light">Skills</h5>
                  <div class="contact text-light" style="font-size: 11px; border-top: 1px solid gray; ">
                      <div class="resume-section mt-3 mb-1">
                        <div class="row w-full" style="line-height: 5px;">
                            <div class="col-md-1" v-for="(skill, index) in form.skills.split(',')" :key="index" v-if="index % 2 === 0">
                                <ul class="list-unstyled">
                                    <li>{{ form.skills.split(',')[index].trim() }}</li>
                                </ul>
                            </div>
                            <div class="col-md-6" v-for="(skill, index) in form.skills.split(',')" :key="'col2  -' + index" v-if="index % 2 !== 0">
                                <ul class="list-unstyled">
                                    <li>{{ form.skills.split(',')[index].trim() || 'Add a skills' }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>                  
                  </div>

                  <!-- LANGUAGES -->
                  <h5 class="fw-bold text-light">Language</h5>
                  <div class="contact text-light" style="font-size: 11px; border-top: 1px solid gray; ">
                      <div class="resume-section mt-3">
                        <div class="row w-full" style="line-height: 5px;">
                            <div class="col-md-1" v-for="(language, index) in form.language.split(',')" :key="index" v-if="index % 2 === 0">
                                <ul class="list-unstyled">
                                    <li>{{ form.language.split(',')[index].trim() }}</li>
                                </ul>
                            </div>
                            <div class="col-md-12" v-for="(language, index) in form.language.split(',')" :key="'col2  -' + index" v-if="index % 2 !== 0">
                                <ul class="list-unstyled">
                                    <li>{{ form.language.split(',')[index].trim() || 'Add a languages' }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>                  
                  </div>

                </div>
                <div class="col-lg-7 bg-white">
                  <div class="my-5">
                    <h3 class="text-primary mb-0 pt-4 " style="font-weight: 800;">{{ form.fullName || 'Modern John Doe' }}</h3>
                    <p class="">{{ form.position || 'Front-End Developer' }}</p>
                  </div>
                  <!-- ABOUT ME -->
                  <div class="mb-2">
                  <h5 class="fw-bold text-dark">ABOUT ME</h5>
                  <div class="contact py-2 pb-0 text-dark" style="font-size: 10px; border-top: 1px solid gray;">
                    <p class="w-100 bg-white"  style="color: gray;" readonly>{{ form.aboutMe || 'Description:' }}</p>
                  </div>
                  </div>
                  <!-- WORK EXPERIENCE -->
                  <div class="mb-2">
                    <h5 class="fw-bold text-dark">WORK EXPERIENCE</h5>
                    <div class="contact py-2 pb-0 text-dark" style="border-top: 1px solid gray;">
                      <div class="resume-section">
                          <div v-for="(experience, index) in form.experiences" :key="index" class="" style="line-height: 16px; color: #4a4f53;">
                              <p class="fw-bold mb-0" style="font-size: 12px;">{{ experience.jobTitle || 'Job Title:' }}</p>
                              <p class="fw-bold mb-0" style="font-size: 12px;">{{ experience.companyName || 'Company Name:' }}</p>
                              <p class="mb-0" style="color: gray;">{{ experience.jobDuration || 'Duration:' }}</p>
                              <p class="w-full" style="color: gray; font-size: 10px;">{{ experience.description || 'Description:' }}</p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!--REFERENCE -->
                  <div class="mb-2">
                    <h5 class="fw-bold text-dark">REFERENCE</h5>
                    <div class="contact py-2 pb-0 text-dark" style="font-size: 11px; border-top: 1px solid gray;">
                      <div class="resume-section">
                          <div v-for="(reference, index) in form.reference" :key="index" class="mb-2" style="line-height: 16px; color: #4a4f53;">
                              <p class="fw-bold mb-0" style="font-size: 12px;">{{ reference.name || 'Name:' }}</p>
                              <p class="mb-0" style="color: gray;">{{ reference.contact || 'Contact Number:' }}</p>
                          </div>
                      </div>                    
                    </div>
                  </div>
                </div>
              </div>
             </div>
        </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="confirmationModal"
        tabindex="-1"
        aria-labelledby="confirmationModalLabel"
        aria-hidden="true"
        ref="modalRef"
      >
        <div class="modal-dialog rounded-3" style="max-width: 70%;">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="confirmationModalLabel">Download your resume</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body " style="background-color: #16213E;">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-2"></div>
                  <div class="col-lg-8 bg-white" id="resumeContent">

              <div class="container-fluid p-0" style=" border: 5px solid white;">
                <div class="row" style="background-color: #16213E;">
                  <div class="col-lg-5 px-3" style="height: 823px; background-color: #16213E;">
                  <!-- Image Preview (Uploaded Image or Default) -->
                  <div class="d-flex justify-content-center mt-4 mb-3">
                        <img
                          v-if="form.profileImagePreview"
                          :src="form.profileImagePreview"
                          alt="Profile Preview"
                          width="150"
                          height="150"
                          style="border: 5px solid lightgray; border-radius: 50%;"
                        />
                        <img
                          v-else
                          src="/src/assets/img/2x2.webp"
                          alt="Default Profile"
                          width="150"
                          height="150"
                          style="border: 5px solid lightgray; border-radius: 50%;"
                        />
                      </div>
                    <!-- CONTACT -->
                    <h5 class="fw-bold text-light">Contact</h5>
                    <div class="contact py-3 pb-0 text-light" style="font-size: 11px; border-top: 1px solid gray;">
                      <p>{{ form.address || 'Address' }}</p>
                      <p>{{ form.email || 'account@gmail.com' }}</p>
                      <p>{{ form.phone || '09XX-XXXX-XXX' }}</p>
                    </div>
                    <!-- EDUCATION -->
                    <h5 class="fw-bold text-light">Education</h5>
                    <div class="contact text-light" style="font-size: 12px; border-top: 1px solid gray; ">
                      <div class="resume-section">
                        <div class="text-light pt-1" style="">
                            <p class="mb-0" style="font-size: 11px;"><strong>{{ form.degree || 'Degree:' }}</strong></p>
                            <p class="mb-0" style="font-size: 11px;">{{ form.institution || form.institutionHignSchool || 'Institution:' }}</p>
                            <p style="color: gray;">{{ form.gradYear || 'Graduation Year:' }}</p>
                        </div>
                      </div>
                      <div class="resume-section mt-3">
                        <div class="text-light" style="line-height: 2px;">
                            <p class="fw-bold" style="font-size: 11px;">{{ form.institutionHignSchool || 'Institution:' }}</p>
                            <p style="color: gray;">{{ form.gradYearHighschool || 'Graduation Year:' }}</p>
                        </div>
                      </div>
                    </div>
                    <!-- SKILLS -->
                    <h5 class="fw-bold text-light">Skills</h5>
                    <div class="contact text-light" style="font-size: 11px; border-top: 1px solid gray; ">
                        <div class="resume-section mt-3 mb-1">
                          <div class="row w-full" style="line-height: 5px;">
                              <div class="col-md-1" v-for="(skill, index) in form.skills.split(',')" :key="index" v-if="index % 2 === 0">
                                  <ul class="list-unstyled">
                                      <li>{{ form.skills.split(',')[index].trim() }}</li>
                                  </ul>
                              </div>
                              <div class="col-md-6" v-for="(skill, index) in form.skills.split(',')" :key="'col2  -' + index" v-if="index % 2 !== 0">
                                  <ul class="list-unstyled">
                                      <li>{{ form.skills.split(',')[index].trim() || 'Add a skills' }}</li>
                                  </ul>
                              </div>
                          </div>
                      </div>                  
                    </div>

                    <!-- LANGUAGES -->
                    <h5 class="fw-bold text-light">Language</h5>
                    <div class="contact text-light" style="font-size: 11px; border-top: 1px solid gray; ">
                        <div class="resume-section mt-3">
                          <div class="row w-full" style="line-height: 1px;">
                              <div class="col-md-1" v-for="(language, index) in form.language.split(',')" :key="index" v-if="index % 2 === 0">
                                  <ul class="list-unstyled">
                                      <li>{{ form.language.split(',')[index].trim() }}</li>
                                  </ul>
                              </div>
                              <div class="col-md-6" v-for="(language, index) in form.language.split(',')" :key="'col2  -' + index" v-if="index % 2 !== 0">
                                  <ul class="list-unstyled">
                                      <li>{{ form.language.split(',')[index].trim() || 'Add a languages' }}</li>
                                  </ul>
                              </div>
                          </div>
                      </div>                  
                    </div>

                  </div>
                  <div class="col-lg-7 bg-white" style="height: 823px;">
                    <div class="my-5">
                      <h4 class="text-primary mb-0 pt-4 " style="font-weight: 800;">{{ form.fullName || 'Modern John Doe' }}</h4>
                      <p class="">{{ form.position || 'Front-End Developer' }}</p>
                    </div>
                    <!-- ABOUT ME -->
                    <div class="mb-2">
                    <h5 class="fw-bold text-dark">ABOUT ME</h5>
                    <div class="contact py-2 pb-0 text-dark" style="font-size: 10px; border-top: 1px solid gray;">
                      <p class="w-100 bg-white"  style="color: gray;" readonly>{{ form.aboutMe || 'Description:' }}</p>
                    </div>
                    </div>
                    <!-- WORK EXPERIENCE -->
                    <div class="mb-2">
                      <h5 class="fw-bold text-dark">WORK EXPERIENCE</h5>
                      <div class="contact py-2 pb-0 text-dark" style="border-top: 1px solid gray;">
                        <div class="resume-section">
                            <div v-for="(experience, index) in form.experiences" :key="index" class="" style="line-height: 16px; color: #4a4f53;">
                                <p class="fw-bold mb-0" style="font-size: 12px;">{{ experience.jobTitle || 'Job Title:' }}</p>
                                <p class="fw-bold mb-0" style="font-size: 12px;">{{ experience.companyName || 'Company Name:' }}</p>
                                <p class="mb-0" style="color: gray;">{{ experience.jobDuration || 'Duration:' }}</p>
                                <p class="w-full" style="color: gray; font-size: 10px;">{{ experience.description || 'Description:' }}</p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <!--REFERENCE -->
                    <div class="mb-2">
                      <h5 class="fw-bold text-dark">REFERENCE</h5>
                      <div class="contact py-2 pb-0 text-dark" style="font-size: 11px; border-top: 1px solid gray;">
                        <div class="resume-section">
                            <div v-for="(reference, index) in form.reference" :key="index" class="mb-2" style="line-height: 16px; color: #4a4f53;">
                                <p class="fw-bold mb-0" style="font-size: 12px;">{{ reference.name || 'Name:' }}</p>
                                <p class="mb-0" style="color: gray;">{{ reference.contact || 'Contact Number:' }}</p>
                            </div>
                        </div>                    
                      </div>
                    </div>
                  </div>
                </div>
             </div>

                  </div>
                  <div class="col-lg-2"></div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="form-control btn btn-primary" data-bs-dismiss="modal" @click="downloadPdf">Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script lang="ts">
  import { ref, reactive, onMounted } from "vue";
  import { Modal } from "bootstrap";
  import { jsPDF } from "jspdf";
  
  export default {
    name: "ModernResume",
    setup() {
      const form = reactive({
        profileImage: null as File | null,
        profileImagePreview: "" as string, // Ensure it's an empty string initially
        fullName: "",
        position: "",
        aboutMe: "",
        email: "",
        phone: "",
        address: "",
        degree: "",
        institution: "",
        institutionHignSchool: "",
        gradYear: "",
        gradYearHighschool: "",
        experiences: [
          {
            jobTitle: "",
            companyName: "",
            jobDuration: "",
            description: "",
          },
        ],
        reference: [
          {
            name: "",
            contact: "",
          },
        ],
        skills: "",
        language: "",
      });
  
      const currentStep = ref(0);
      const isFormSubmitted = ref(false);
      const modalRef = ref<HTMLElement | null>(null);
      let modalInstance: Modal | null = null;
  
      onMounted(() => {
        if (modalRef.value) {
          modalInstance = new Modal(modalRef.value);
        }
      });
  
      const handleImageUpload = (event: Event) => {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
          const file = input.files[0];
          form.profileImage = file;
          
          console.log("Selected File:", file); // Debugging log
          console.log("File Type:", file.type);
  
          if (file.type.startsWith("image/")) {
            form.profileImagePreview = URL.createObjectURL(file);
            console.log("Preview URL:", form.profileImagePreview); // Debugging log
          } else {
            console.error("Selected file is not an image.");
          }
        }
      };
  
      const nextStep = () => {
        if (currentStep.value < 4) {
          currentStep.value++;
        } else {
          submitForm();
        }
      };
  
      const prevStep = () => {
        if (currentStep.value > 0) {
          currentStep.value--;
        }
      };
  
      const submitForm = () => {
        isFormSubmitted.value = true;
        console.log("Form Submitted", form);
        modalInstance?.show();
      };
  
      const addExperience = () => {
        form.experiences.push({
          jobTitle: "",
          companyName: "",
          jobDuration: "",
          description: "",
        });
      };
  
      const addreference = () => {
        form.reference.push({
          name: "",
          contact: "",
        });
      };
  
      const downloadPdf = () => {
        const doc = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });
  
        const resumeElement = document.getElementById("resumeContent");
  
        if (resumeElement) {
          doc.html(resumeElement, {
            callback: function (doc) {
              doc.save("Resume.pdf");
            },
            width: 285,
            windowWidth: 800,
            margin: [0, 0, 2, 5], // Optional margin for content
          });
        } else {
          console.error("Resume content not found");
        }
      };
  
      return {
        form,
        currentStep,
        isFormSubmitted,
        modalRef,
        handleImageUpload,
        nextStep,
        prevStep,
        submitForm,
        addExperience,
        addreference,
        downloadPdf,
      };
    },
    data() {
      return {
        currentView: "tertiary",
      };
    },
  };
</script>
  

  
  <style scoped>
  .container {
    max-width: 800px;
  }
  
  .form-container {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #007bff;
  }
  
  .section-title {
    margin-top: 30px;
    font-size: 1.2rem;
    color: #495057;
  }
  
  .form-control {
    border-radius: 0.375rem;
  }
  
  .resume-container {
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .resume-section {
    margin-bottom: 20px;
  }
  
  button {
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #007bff;
  }
  
  button.btn-success {
    background-color: #28a745;
  }
  
  button.btn-success:hover {
    background-color: #218838;
  }
  </style>
    
  