<template>
    <div>
      <!-- Form -->
      <form @submit.prevent="submitForm">
        <!-- Your form fields here -->
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  
      <!-- Modal -->
      <div
        class="modal fade"
        id="confirmationModal"
        tabindex="-1"
        aria-labelledby="confirmationModalLabel"
        aria-hidden="true"
        ref="modalRef"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="confirmationModalLabel">Form Submitted</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Your resume has been successfully submitted!
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script lang="ts">

export default {
  name: "modal",
};
</script>