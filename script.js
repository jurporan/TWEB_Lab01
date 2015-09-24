window.setInterval(clock, 1000);
nb_people = 1;
event = null;

$('#btn_alert').click(popup);
$('#btn_toggle').click(toggle);

$('html').keydown(function(e)
{
    if (e.shiftKey)
    {
    nb_people++;
    generate();
}
}); 
 
function popup()
{
    alert("Hello");
}

function toggle()
{
    $('#person').toggle();
}

function clock()
{
    $('#clock').text(new Date());
}

$('html').mousemove(function(event) 
{
    var msg = event.pageX + ", " + event.pageY;
    $('#position').text(msg);
    
    generate();
});


function generate()
{
    var gender;
    var people = "";
    var name;
    
    for (var i = 0; i < nb_people; i++)
    {
        
        gender = chance.gender();
        name = chance.name({ gender: gender}); 
        if(gender == 'Female')
        {
            $('#person').attr("class", "alert alert-danger");
        }
        else
        {
            $('#person').attr("class", "alert alert-info");
        }
        people += name + " (" + gender + ")" + "<br/>" ;
    }
    $('#person').html(people);
}

$.getJSON("data.json", rooms);

function rooms(data)
{
    var text = "Rooms";
    $.each(data, function(index, element)
    {
        text += "<br/>" + "Room: " + index + " " + element;
    });
    $('#rooms').html(text);
}
