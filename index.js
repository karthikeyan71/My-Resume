$(document).ready(function() {
  console.log('Applciation has been started');

  var doc = new jsPDF();
  var specialElementHandlers = {
      '#editor': function (element, renderer) {
          return true;
      }
  };

  $('#cmd').click(function () {
      var divContents = $("#resume").html();

      console.log('Printing the div components');
      console.log(divContents);

      // var printDoc = new jsPDF();
      // printDoc.fromHTML($('#resume').get(0), 10, 10, {'width': 180});
      // printDoc.autoPrint();
      // printDoc.output("dataurlnewwindow");

      var printWindow = window.open('', '');
      printWindow.document.write('<html><head><title>DIV Contents</title>');
      printWindow.document.write('<link rel="stylesheet" href="index.css"/>');
      printWindow.document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/><link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet"/>');
      printWindow.document.write('</head><body id="body">');
      printWindow.document.write(divContents);
      printWindow.document.write('</body></html>');
      printWindow.document.close();

      setTimeout(function() {
        printWindow.print();

      }, 2000);

      // doc.fromHTML($('#resume').html(), 15, 15, {
      //     'width': 170,
      //         'elementHandlers': specialElementHandlers
      // });
      // doc.save('sample-file.pdf');
  });

});
