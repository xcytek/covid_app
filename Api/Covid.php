<?php


class CovidModel
{
    protected $config;

    protected $dbh;

    public function __construct()
    {
        $this->readConfig();
        try {
                $dsn = "mysql:host=localhost;dbname=$this->config->dbname";
                $this->dbh = new PDO($dsn, $this->config->username, $this->config->password);
        }

        catch (PDOException $e){
            throw new Exception($e->getMessage());
        }

    }

    public function dbConnect()
    {
        try {
            $dsn = "mysql:host=localhost;dbname=covid19";
            return new PDO($dsn, "covid", "superpassword");
        }

        catch (PDOException $e){
            throw new Exception($e->getMessage());
        }

    }

    public function insertPatients($data)
    {

        $lastPatient = [];
        $dbh = $this->dbConnect();

        $sql_insert = "INSERT INTO patients(name, gender, place, age, avatar) VALUES(" .
            $dbh->quote($data['name']) . ', ' .
            $dbh->quote($data['gender']) . ', ' .
            $dbh->quote($data['place']) . ', ' .
            $dbh->quote($data['age']) . ', ' .
            $dbh->quote($data['avatar']) .
            ")";

        if($dbh->exec($sql_insert) === false){
            $msg = 'Error inserting the patient.';
        }else{
            $msg = "The new patient " . $data['name'] . " is created";
        }

        return [ 'content' => $lastPatient , "message" => $msg, 'code' => 201 ];
    }

    public function getPatients()
    {
        $dbh = $this->dbConnect();
        $stmt = $dbh->prepare("SELECT * FROM patients");
        $stmt->execute();
        $patients = [];
        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            array_push($patients, $row);
        }

        return [ 'content' => $patients, 'code' => 200 ];
    }

    public function readConfig()
    {
        $this->config = json_decode(file_get_contents(__DIR__ . "/config.json"), true);
    }

}

function response($data)
{
    header('Content-type:application/json');
    echo json_encode($data);
}

$covid = new CovidModel();

if ($_GET['action'] === 'get_patients') {

    response($covid->getPatients());

}

elseif ($_GET['action'] === 'save_patient') {

    response($covid->insertPatients($_GET));

}

