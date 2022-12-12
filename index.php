function getHits() {
  if(($fp = @fopen("data/counter.txt", "r+")) === false)
   return false;
  $count = fgets($fp);
  $count = $count + 1;
  fseek($fp, 0);
  fputs($fp, $count);
  fclose($fp);
  return $count;
}
define(getHits());
