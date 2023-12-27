function findAllDoctors(){
    $(document.getElementById("allDoc")).on( "click",function(){
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: 'http://localhost:8088/endpoint',
            data: JSON.stringify({query: `query{
                                            findAllDoctors{
                                                idDoctor
                                                surname
                                                name
                                                fullName
                                            }
                                        }`, }),
            cache: false,
            success: function( json ) {
                var tr=[];
                    response = json.data.findAllDoctors;
                    for (var i = 0; i < response.length; i++) {
                        tr.push('<tr>');
                        tr.push('<td>' + response[i].idDoctor + '</td>');
                        tr.push('<td>' + response[i].surname + '</td>');
                        tr.push('<td>' + response[i].name + '</td>');
                        tr.push('<td>' + response[i].fullName + '</td>');
                        tr.push('</tr>');
                    }
                    $("tr").not(":first").hide();   
                    $('table').append($(tr.join('')));
            }, error: function ( error ){
                console.log( error );
            }
    });
    });
};

function findByIdDoctor(){
    $(document.getElementById("findByIdDoc")).on( "click",function(){
        var id = $('#idDoctor').val();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: 'http://localhost:8088/endpoint',
            data: JSON.stringify({query: `query{
                                                findByIdDoctor( idDoctor: ` + id +` ){
                                                idDoctor
                                                surname
                                                name
                                                fullName
                                            }
                                        }`, }),
            cache: false,
            success: function( json ) {
                var tr=[];
                response = json.data.findByIdDoctor;
                tr.push('<tr>');
                tr.push('<td>' + response.idDoctor + '</td>');
                tr.push('<td>' + response.surname + '</td>');
                tr.push('<td>' + response.name + '</td>');
                tr.push('<td>' + response.fullName + '</td>');
                tr.push('</tr>');
                $("tr").not(":first").hide();
                $('table').append($(tr.join('')));
            }, error: function ( error ){
                console.log( error );
            }
        });
    });
};