<pre>
<?php
    $bookInfo = ['title', 'author', 'year', 'genre'];

    $books = [
        $bookInfo = ['Harry Potter','J.K.Rowling',2002,'Fantasy'],
        $bookInfo = ['The Lord Of The Rings','J.R.R. Tolkien',2012,'Fantasy'],
        $bookInfo = ['IT','Stephen King',1987,'Fiction']

    ];

    var_dump($books);
    
        $averageYear = function() use ($books)
    {
        $avrg = ($books[0][2] + $books[1][2] + $books[2][2]) / 3;
        return $avrg;
    };

    echo ($averageYear());
?>
</pre>
