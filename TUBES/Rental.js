// Deklarasi
const prompt = require('prompt-sync')();

var array = []

var test = false

// Object pattern
var kendaraan = (function(){
  // Constructor over loading rental untuk motor
  function Rental(sewaMotor, hari){
    
    console.log('Sewa perhari\t : ', sewaMotor)
    let jmHari = prompt('Lama sewa (hari) : ')
   
    return{
      sewaMotor : sewaMotor,
      hari : hari,
      jmHari : jmHari,
      totalSewa : (jmHari * sewaMotor * hari)
    }
  }

  // Constructor over loading rental untuk mobil
  function Rental(sewaMobil, hari){
    
    console.log('Sewa perhari\t : ', sewaMobil)
    let jmHari = prompt('Lama sewa (hari) : ')

    
    return{
      sewaMobil : sewaMobil,
      hari : hari,
      jmHari : jmHari,
      totalSewa : (jmHari * sewaMobil * hari)
    }
  }
  
  // Method data person
  function Person(){
    console.log('======================')
    console.log('Isi Data Diri')
    console.log('======================')
    let nama = prompt('Masukkan nama\t: ')
    let noTelp = prompt('Masukkan No. HP : ')
    let alamat = prompt('Masukkan alamat\t: ')

    return{
      nama : nama,
      noTelp : noTelp,
      alamat : alamat
    }
  }

  // Method pilihan
  function getPilihan(){
    console.log('Silahkan isi data dan pilih kendaraan :  ')
    console.log('1. Isi Data Diri')
    console.log('2. Roda Dua')
    console.log('3. Roda Empat')
    console.log('4. Lihat Pesanan')
    console.log('5. Keluar')
  }

// Method roda 2 atau motor
  function getRoda2(){
    console.log('======================')
    console.log('Pilih Motor')
    console.log('======================')
    console.log('1. Honda Vario | Rp 55.000 / hari')
    console.log('2. Honda Beat  | Rp 45.000 / hari')
    console.log('3. Yamaha Nmax | Rp 70.000 / hari')
    console.log('4. Yamaha Mio  | Rp 40.000 / hari') 
  }
  
//Method roda 4 atau mobil
  function getRoda4(){
    console.log('======================')
    console.log('Pilih Mobil')
    console.log('======================')
    console.log('1. Avanza | Rp 250.000 / hari')
    console.log('2. Xenia  | Rp 250.000 / hari')
    console.log('3. Jazz   | Rp 350.000 / hari')
    console.log('4. Yaris  | Rp 400.000 / hari')
    console.log('5. Agya   | Rp 250.000 / hari')
  }

return{
  Rental :  Rental,
  Person : Person,
  getPilihan : getPilihan,
  getRoda2 : getRoda2,
  getRoda4 : getRoda4
}

}())

console.log('---- Selamat Datang di Penyewaan Kendaraan ----')
do {
  console.log()
  // Memanggil method pilihan
  kendaraan.getPilihan()

  let pilih = prompt('Masukkan pilihan\t: ')
    if(pilih == 1) {

    array.push(kendaraan.Person())
      
    // Memilih kendaraan roda 2   
    }else if(pilih == 2){

      // Memanggil method roda 2
       kendaraan.getRoda2()
       let pilih1 = prompt('Masukkan pilihan\t: ')
      
       // Menampilkan data pesanan sementara
       console.log("\nData Pesanan")
       for (let i = 0; i < array.length; i++){
         console.log(`ID Pemesan\t: ${(i + 1)}`)
         console.log(`Nama\t\t: ${array[i].nama}`)
         console.log('\n(NOTE : MOHON INPUT ID PEMESAN DENGAN BENAR!)')
         console.log()
        }

        // Memasukkan ID Pemesan
       let idPemesan = prompt('Masukkan ID Pemesan : ')
       let indexData = Number(idPemesan - 1)

       if(pilih1 == 1){

        // Jika input ID pemesan benar
        if(array[indexData]){
        array[indexData].totalSewa =  kendaraan.Rental(55000, 1).totalSewa
        array[indexData].pilih1 = 'Honda Vario'

        // Jika salah
        } else {
          console.log('ID yang Diinputkan Salah, Mohon Coba Lagi')
        }

       }else if(pilih1 == 2){
        
        // Jika input ID pemesan benar
        if(array[indexData]){ 
        array[indexData].totalSewa = kendaraan.Rental(45000, 1).totalSewa
        array[indexData].pilih1 = 'Honda Beat'

        // Jika salah
        } else {
          console.log('ID yang Diinputkan Salah, Coba Lagi')
        }

       }else if(pilih1 == 3){
        
        // Jika input ID pemesan benar
        if(array[indexData]){
        array[indexData].totalSewa = kendaraan.Rental(70000, 1).totalSewa
        array[indexData].pilih1 = 'Yamaha Nmax'

        // Jika salah
        } else {
          console.log('ID yang Diinputkan Salah, Coba Lagi')
        }

       }else if(pilih1 == 4){
         
        // Jika input ID pemesan benar
        if(array[indexData]){
        array[indexData].totalSewa = kendaraan.Rental(40000, 1).totalSewa
        array[indexData].pilih1 = 'Yamaha Mio'

        // Jika salah
        } else {
          console.log('ID yang Diinputkan Salah, Coba Lagi')
        }

       }else {
         console.log('Maaf Inputan Salah, Mohon Dicoba Lagi.')
       }

  // Memilih kendaraan roda 4    
  } else if(pilih == 3){
       // Memanggil method roda 4
       kendaraan.getRoda4()
       let pilih1 = prompt('Masukkan pilihan\t: ')
      
       // Menampilkan data pesanan sementara
       console.log("\nData Pesanan")
       for (let i = 0; i < array.length; i++){
         console.log(`ID Pemesan\t: ${(i + 1)}`)
         console.log(`Nama\t\t: ${array[i].nama}`)
         console.log('\nNOTE : MOHON INPUT ID PEMESAN DENGAN BENAR!')
         console.log()
        }

       // Memasukkan ID Pemesan
       let idPemesan = prompt('Masukkan ID Pemesan : ')
       let indexData = Number(idPemesan - 1)
       
       if(pilih1 == 1){

         // Jika input ID pemesan benar
         if(array[indexData]){
         array[indexData].totalSewa = kendaraan.Rental(250000, 1).totalSewa
         array[indexData].pilih1 = 'Avanza'

         // Jika salah
         } else {
          console.log('ID yang Diinputkan Salah, Coba Lagi')
         }

       }else if(pilih1 == 2){
         
         // Jika input ID pemesan benar
         if(array[indexData]){
         array[indexData].totalSewa = kendaraan.Rental(250000, 1).totalSewa
         array[indexData].pilih1 = 'Xenia'

         // Jika salah
         } else {
          console.log('ID yang Diinputkan Salah, Coba Lagi')
         }

       }else if(pilih1 == 3){

         // Jika input ID pemesan benar
         if(array[indexData]){
         array[indexData].totalSewa = kendaraan.Rental(350000, 1).totalSewa
         array[indexData].pilih1 = 'Jazz'

         // Jika salah
         } else {
          console.log('ID yang Diinputkan Salah, Coba Lagi')
         }

       }else if(pilih1 == 4){

         // Jika input ID pemesan benar
         if(array[indexData]){
         array[indexData].totalSewa = kendaraan.Rental(400000, 1).totalSewa
         array[indexData].pilih1 = 'Yaris'

         // Jika salah
         } else {
          console.log('ID yang Diinputkan Salah, Coba Lagi')
         }   

       }else if(pilih1 == 5){
        
         // Jika input ID pemesan benar
         if(array[indexData]){
         array[indexData].totalSewa = kendaraan.Rental(250000, 1).totalSewa
         array[indexData].pilih1 = 'Agya'

         // Jika salah
         } else {
          console.log('ID yang Diinputkan Salah, Coba Lagi')
         }

       }else {
         console.log('Maaf Inputan Salah, Mohon Dicoba Lagi.')
     }
  
  // Menampilkan data pesanan
  }else if(pilih == 4){
    
    console.log('<===== Data Pesanan =====>')
    let index = 1
  
    for (let x in array) {
      console.log(`\nPemesan\t: ${ index }`);
	    index++;
      console.log(`Nama\t\t\t: ${ array[x].nama }`)
      console.log(`No. HP\t\t\t: ${ array[x].noTelp }`)
      console.log(`Alamat\t\t\t: ${ array[x].alamat}`)
      console.log(`Kendaraan\t\t: ${ array[x].pilih1}`)
      console.log(`Total Bayar\t\t: ${ array[x].totalSewa }`) 
    }
  
  }else if(pilih == 5){
    test = true
    console.log('Terima Kasih Telah Memakai Jasa Kami!')

   }else {
    console.log('Maaf Inputan Salah, Mohon Dicoba Lagi.')
   }

}while(!test)
