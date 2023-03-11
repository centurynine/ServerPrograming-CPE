<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Country sort</title>
</head>
<body>
    <?php 
    
    echo "Country sort doc01<br>";
    $asia = array("Armenia", "Azerbaijan", "Bahrain", "Cyprus", "Georgia", "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Oman", "Qatar", "Saudi Arabia", "State of Palestine", "Syrian Arab Republic", "Turkey", "United Arab Emirates", "Yemen", "Brunei", "Cambodia", "Indonesia", "Lao", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Timor-Leste", "Viet Nam", "Afghanistan", "Bangladesh", "Bhutan", "India", "Iran", "Maldives", "Nepal", "Pakistan", "Sri Lanka", "China", "China, Hong Kong Special Administrative Region", "China, Macao Special Administrative Region", "Democratic People's Republic of Korea", "Japan", "Mongolia", "Republic of Korea", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan", "Uzbekistan");
    $doc1 = array();
    $doc2 = array();
    $doc3 = array();

    $fh = fopen("hw-doc02.txt", "r");
    $text = fread($fh, filesize("hw-doc02.txt"));
    $text = strtolower($text);
    fclose($fh);
 
    for ($i = 0; $i < count($asia); $i++) {
        $asia[$i] = strtolower($asia[$i]);
     
        if (stripos($text, $asia[$i]) != null) {
            $doc1[] = $asia[$i];
        }
    }
    
    sort($doc1);
    for ($i = 0; $i < count($doc1); $i++) {
        echo ucfirst($doc1[$i]);
        echo "<br>";
    }
     
    echo "<br>";
    echo "Country sort doc02<br>";
    $fh = fopen("hw-doc02.txt", "r");
    $text = fread($fh, filesize("hw-doc02.txt"));
    $text = strtolower($text);
    fclose($fh);
 
    for ($i = 0; $i < count($asia); $i++) {
        $asia[$i] = strtolower($asia[$i]);
     
        if (stripos($text, $asia[$i]) != null) {
            $doc2[] = $asia[$i];
        }
    }
    
    sort($doc2);
    for ($i = 0; $i < count($doc2); $i++) {
        echo ucfirst($doc2[$i]);
        echo "<br>";
    }
    
    echo "<br>";
    echo "Country sort doc03<br>";
    $fh = fopen("hw-doc03.txt", "r");
    $text = fread($fh, filesize("hw-doc03.txt"));
    $text = strtolower($text);
    fclose($fh);
 
    for ($i = 0; $i < count($asia); $i++) {
        $asia[$i] = strtolower($asia[$i]);
     
        if (stripos($text, $asia[$i]) != null) {
            $doc3[] = $asia[$i];
        }
    }
    
    sort($doc3);
    for ($i = 0; $i < count($doc3); $i++) {
        echo ucfirst($doc3[$i]);
        echo "<br>";
    }

    echo "<br>";
    $all = array_merge($doc1, $doc2, $doc3);
    $all = array_unique($all);
    sort($all);
    echo "<br>";
    echo "All asia country<br>";
    for ($i = 0; $i < count($all); $i++) {
        echo ucfirst($all[$i]);
        echo "<br>";
    }

    ?>
</body>
</html>