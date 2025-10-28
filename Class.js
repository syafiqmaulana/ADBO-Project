class Karyawan {
    constructor(nama, jabatan, gaji) {
        this.nama = nama;
        this.jabatan = jabatan
        this.gaji = gaji;
    }

    info() { 
        return console.log(
            `${this.nama} bekerja di perusahaan dengan jabatan ${this.jabatan} dengan gaji ${this.gaji}`
        );
    }
}

const karyawan1 = new Karyawan("wawan", "Housekeeping", 8000000); // object
const karyawan2 = new Karyawan("Budi", "Programer", 12000000);
karyawan1.info()
