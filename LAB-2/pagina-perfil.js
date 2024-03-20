$(document).ready(function() {
    console.log("Document ready function executed.");
    // Function to add a new row to the table
    function addTaskRow(taskName, taskDate) {
        var newRow = '<tr><td>' + taskName + '</td><td>' + taskDate + '</td><td><input type="checkbox"></td></tr>';
        $('#taskTable tbody').append(newRow);
    }

    // Event listener for the form submission
    $('#taskForm').submit(function(e) {
        e.preventDefault();
        
        var taskName = $('#taskName').val();
        var taskDate = $('#taskDate').val();
        
        // Add task to the table
        addTaskRow(taskName, taskDate);
        
        // Close the modal
        $('#addTaskModal').modal('hide');
        
        // Clear the form fields
        $('#taskForm')[0].reset();
    });
});
