function setmethod(method)
{
    if(method.value=="post")
    {
        document.getElementById("formd").setAttribute="POST";
        
    }
    else
    {
        document.getElementById("formd").setAttribute="GET";
      
    }
}