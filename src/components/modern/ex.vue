            <!-- <div class="resume-container rounded-0" style="height: 150vh;">
                <h3 class="fw-bold text-center text-primary" style="font-size: 46px;">{{ form.fullName || 'Modern John Doe' }}</h3>
                <div class="d-flex justify-content-around pt-2 pb-0" style="height: 30px; border-bottom: 2px solid #000; border-top: 2px solid #000; font-size: 8px;">
                    <p><i class="fas fa-location-dot"></i> {{ form.address || 'Address' }}</p>
                    <p><i class="fas fa-envelope"></i> {{ form.email || 'account@gmail.com' }}</p>
                    <p><i class="fas fa-phone"></i> {{ form.phone || '09XX-XXXX-XXX' }}</p>
                </div>
                
                <div class="resume-section mt-3 mb-2">
                    <h5 class="mb-2 bg-primary-subtle py-1 px-1 fw-bolder" style="color: #212529;">Educational Background:</h5>
                    <div class="p-1" style="line-height: 2px; color: #4a4f53;">
                        <p class="fw-bolder" style="font-size: 16px;"><strong>{{ form.degree || 'Degree:' }}</strong></p>
                        <p class="fw-bold" style="font-size: 16px;">{{ form.institution || form.institutionHignSchool || 'Institution:' }}</p>
                        <p style="color: gray;">{{ form.gradYear || 'Graduation Year:' }}</p>
                    </div>
                </div>
                <div class="resume-section">
                    <div class="px-1" style="line-height: 2px; color: #4a4f53;">
                        <p class="fw-bold" style="font-size: 16px;">{{ form.institutionHignSchool || 'Institution:' }}</p>
                        <p style="color: gray;">{{ form.gradYearHighschool || 'Graduation Year:' }}</p>
                    </div>
                </div>

                <div class="resume-section">
                    <h5 class="bg-primary-subtle py-1 px-1 fw-bolder" style="color: #212529;">Professional Experience:</h5>
                    <div v-for="(experience, index) in form.experiences" :key="index" class="px-1 mb-0" style="line-height: 16px; color: #4a4f53;">
                        <p class="fw-bold mb-0" style="font-size: 16px;">{{ experience.jobTitle || 'Job Title:' }}</p>
                        <p class="fw-bold mb-0" style="font-size: 16px;">{{ experience.companyName || 'Company Name:' }}</p>
                        <p class="mb-0" style="color: gray;">{{ experience.jobDuration || 'Duration:' }}</p>
                        <p class="w-full" style="color: gray; font-size: 10px;">{{ experience.description || 'Description:' }}</p>
                    </div>
                </div>
            <div class="resume-section">
                <h5 class="text-dark fw-bolder bg-primary-subtle px-1">Skills:</h5>
                <div class="row w-75 mt-3 px-1" style="line-height: 2px;">
                    <div class="col-md-1" v-for="(skill, index) in form.skills.split(',')" :key="index" v-if="index % 2 === 0">
                        <ul class="list-unstyled">
                            <li>{{ form.skills.split(',')[index].trim() }}</li>
                        </ul>
                    </div>
                    <div class="col-md-4" v-for="(skill, index) in form.skills.split(',')" :key="'col2  -' + index" v-if="index % 2 !== 0">
                        <ul class="list-unstyled">
                            <li>{{ form.skills.split(',')[index].trim() || 'Add a skills' }}</li>
                        </ul>
                    </div>
                    <div class="col-md-8"></div>
                </div>
            </div>
            </div> -->
