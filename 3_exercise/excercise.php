<?php
function CountLettersAsString($a) {
    $str1= strtolower($a);
    $str = str_replace(' ', '', $str1);
    $str_split = chunk_split($str,1,' ');
    $arr = array_unique(explode(' ',$str_split));
    foreach ($arr as $i)
    {
        $b = substr_count($str1, $i);
        echo $i .str_repeat('*',$b).'  ';
    }

}

function SumArray($a, $b){
    $arr = array(10,20,30,40,50,60,70,80,90,100);
    if ($a < $b && $a > 0 && $b > 0 && $b<100) {
        $a_index = array_search($a,$arr);
        $b_index = array_search($b,$arr);
        $new_arr= array_sum(array_slice($arr, $a_index, $b_index-$a_index+1));
        echo $new_arr;
    }
    else if ($a < 0 || $b < 0) {
        echo -1;
    }
    else if ($a > $b) {
        echo 0;
    }
    else if ($a < $b && $a <= 100 && $b > 100) {
        $a_index = array_search($a,$arr);
        $b_index = array_search(100,$arr);
        $new_arr= array_sum(array_slice($arr, $a_index, $b_index-$a_index+1));
        echo $new_arr;
    }
    else if (array_search($a,$arr)===null && array_search($b,$arr)===null){
        echo 0;
    }
}

function GivePoint($arr) {
    $getArr=[];
    foreach ($arr as $i)
    {
        if ($i % 2==0 & $i != 8){
            array_push($getArr, 1);
        }
        if ($i % 2==1){
            array_push($getArr, 3);
        }
        if ($i===8){
            array_push($getArr, 5);
        }
    }
    echo array_sum($getArr);

}
// CountLettersAsString('KkHUNG  k   n');
// SumArray(90,120);
GivePoint([8,8,2,1]);
