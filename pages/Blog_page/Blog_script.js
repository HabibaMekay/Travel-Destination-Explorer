document.addEventListener('DOMContentLoaded', () => {
  
    fetch('Blog_page_details.html')
        .then(response => response.text())
        .then(html => {
           
            const modalContainer = document.getElementById('modal-container');
            if (modalContainer) {
                modalContainer.innerHTML = html;

               
                document.querySelectorAll('.btn[data-bs-toggle="modal"]').forEach(button => {
                    button.addEventListener('click', function () {
                        const modalId = button.getAttribute('data-bs-target');
                        const modalElement = document.querySelector(modalId);
                        const bootstrapModal = new bootstrap.Modal(modalElement);
                        bootstrapModal.show();
                    });
                });

             
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.addEventListener('hidden.bs.modal', () => {
                        
                        const backdrop = document.querySelector('.modal-backdrop');
                        if (backdrop) {
                            backdrop.remove();
                        }
                    });
                });
            }
        })
        .catch(error => console.error('Error loading modal:', error));
});
