<?php 
  if(isset($_GET["type"])){
    $type = $_GET["type"];
  }else{
    $type = 2;
  }
?>
{
"rows":[{"a":"名称1","b":200,"c":100,"d":100},{"a":"名称2","b":100,"c":100,"d":100},{"a":"名称3","b":100,"c":100,"d":100},{"a":"名称4","b":100,"c":100,"d":100},
{"a":"名称5","b":100,"c":100,"d":100},{"a":"名称6","b":100,"c":100,"d":100},{"a":"名称7","b":100,"c":100,"d":100},{"a":"名称8","b":100,"c":100,"d":100},
{"a":"名称9","b":100,"c":100,"d":100},{"a":"名称10","b":100,"c":100,"d":100}],
"results": 40,
<?php if($type == 0 || $type == 2){ ?>
"pageSummary" : {"a":200,"b":400,"d":200}
<?php } if($type == 2) {?>
,

<?php } if($type != 0) {?>
"summary": {"a":200,"b":4000,"d":2000}
<?php } ?>
}