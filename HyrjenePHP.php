<!doctype html>
<html>
    <head>
        <style>
            p {
                font-size:30pt;
                color:red;
            }
        </style>
    </head>
    <body>
        <h3>Pershendetje G3 Hyrje ne PHP</h3>
        <?php
            /* Kjo eshte hapsira ku ne e shtojme PHP */
            echo '<p> Ky eshte outputi i realizuar me PHP</p>';
            $emri = "Tigran";
            $mosha = 20;
            $gjatesia = 1.82;
            $iMartuar = true;
            $profesioni = null;

            echo $emri.'<br>';
            echo $mosha.'<br>';
            echo $gjatesia.'<br>';
            echo $iMartuar.'<br>';
            echo $profesioni.'<br>';

            /*Kjo pjese shfaq llojin e te dhenave*/

            echo gettype($emri).'<br>';
            echo gettype($mosha).'<br>';
            echo gettype($gjatesia).'<br>';
            echo gettype($iMartuar).'<br>';
            echo gettype($profesioni).'<br>';

            #Per ti shfaq me shume informata si lloji i variables, gjatesia, e perdorim per teste - var_dump
            echo var_dump($emri).'<br>';
            echo var_dump($mosha).'<br>';
            echo var_dump($gjatesia).'<br>';
            echo var_dump($iMartuar).'<br>';
            echo var_dump($profesioni).'<br>';            
        ?>

        <h2>
            <?php
                $mesazhi1="Ky eshte nje mesazh";
                $mesazhi2="ky eshte nje mesazh tjeter";
                echo $mesazhi1.'<br>'.$mesazhi2.'<br>';
                echo nl2br("Me kete ne shfaqim nje rezultat:\n").$mesazhi1;
            ?>
        </h2>
    </body>
</html>