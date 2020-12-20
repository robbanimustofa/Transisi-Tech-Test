<template>
    <div class="vh-100">

        <!-- HEADER -->
        <div class="header-top bg-white">
            <div class="header-top--dashboard w-limit">
                <div class="header-top--left p-x-20 h-100 profile-wrapper hov">
                    <div class="profile-picture"
                        style="background-image: url('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')">
                    </div>
                    <div class="profile-id">
                        <div class="f-14 f-semi">Mardial Maldini</div>
                        <div class="f-12 m-t-min-2 f-c-midgrey">User</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CONTENT -->
        <main class="main-dashboard has-bottom-menu">
            <div class="w-limit">
                <div class="p-t-20 p-x-20">PAYLINK PANEL</div>
                <div class="paylink-wrapper p-x-20 p-t-20 p-d-16">
                    <div class="paylink-panel">
                        <div class="paylink-top-panel">
                            <div class=""></div>
                            <div class="paylink-balance">Rp 400.000</div>
                        </div>
                        <div class="paylink-bottom-panel">
                            <div class="item-panel-wrapper hov">
                                <div class="icon-panel icon-isi-saldo"></div>
                                <div class="text-panel">Isi Saldo</div>
                            </div>
                            <div class="item-panel-wrapper hov">
                                <div class="icon-panel icon-tarik-saldo"></div>
                                <div class="text-panel">Tarik Saldo</div>
                            </div>
                            <div class="item-panel-wrapper hov">
                                <div class="icon-panel icon-riwayat"></div>
                                <div class="text-panel">Riwayat</div>
                            </div>
                        </div>
                    </div>
                    <div class="m-t-12 upgrade-prompt">
                        <div class="f-14 f-c-midgrey">Upgrade akun anda untuk menarik saldo PayLink.</div>
                        <div class="f-14 f-semi f-c-blue m-t-4 arrow-right hov">Upgrade sekarang</div>
                    </div>
                </div>

                <div class="separator-line"></div>

                <!-- SECTION KEUANGAN -->
                <div class="section-keuangan-wrapper p-t-16 p-d-20 p-x-20">
                    <div class="f-18 f-bold">Keuangan</div>
                    <div class="m-t-12 inner-panel">
                        <div class="inner-panel-item">
                            <div class="f-14 f-c-midgrey">Total Kas Laci</div>
                            <div class="f-16">Rp 2.928.000</div>
                        </div>
                        <div class="inner-panel-item">
                            <div class="f-14 f-c-midgrey">Total Rekening</div>
                            <div class="f-16">Rp 890.000</div>
                        </div>
                        <div class="inner-panel-item">
                            <div class="f-14 f-c-midgrey">Piutang Konsumen</div>
                            <div class="f-16">Rp 59.000</div>
                        </div>
                    </div>
                </div>

                <div class="action-pending-wrapper">
                    <div class="separator-line"></div>
                    <div class="p-x-20 p-y-16">
                        <div class="action-pending lsp">
                            <div class="action-pending-text f-14 f-semi">16 tindakan butuh konfirmasi</div>
                            <div class="action-pending-button f-14">Lihat</div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="separator"></div>

            <!-- <div class="w-limit"> -->

                <!-- SECTION OMZET -->
                <!-- <div class="omzet-wrapper p-t-24 p-d-16 p-x-20">
                    <div class="f-18 f-bold">Omzet Bulan Ini</div>
                    <div class="m-t-12 pill-wrapper">
                        <div class="pill-item active" id="toggle-all">Semua</div>
                        <div class="pill-item" id="toggle-konv">Konvensional</div>
                        <div class="pill-item" id="toggle-snap">SnapClean</div>
                    </div>
                    <div class="m-t-20 m-d-20">
                        <div class="f-12 f-c-midgrey">Per 7 Jul 2020 • 11:29</div>
                        <div class="f-28 lsp f-ln-150" id="omzet-total">Rp 350.000</div>
                        <div class="f-12 f-semi f-c-midgrey">14 Nota</div>
                    </div>
                    <div class="omzet-chart-wrapper m-x-min">
                        <canvas id="omzet-chart" class="omzet-chart"></canvas>
                    </div>
                    <div class="omzet-chart-legend m-t-12">
                        <div class="legend-chart konv f-12 f-c-midgrey">Konvensional</div>
                        <div class="legend-chart snap f-12 f-c-midgrey m-l-12">SnapClean</div>
                    </div>
                </div> -->

                <!-- <div class="separator-line"></div> -->

                <!-- SETCION RINCIAN PENDAPATAN -->
                <!-- <div id="detail-earning" class="collapse p-x-20 p-t-16 p-d-4">
                    <div class="f-18 f-bold">Rincian pendapatan bulan ini</div>
                    <div class="m-t-12 inner-panel">
                        <div class="inner-panel-item">
                            <div class="f-14 f-c-midgrey">Kiloan</div>
                            <div class="f-16">Rp 58.000<span class="suffix">3 KG</span></div>
                        </div>
                        <div class="inner-panel-item">
                            <div class="f-14 f-c-midgrey">Satuan</div>
                            <div class="f-16">Rp 92.000<span class="suffix">13 PCS</span></div>
                        </div>
                        <div class="inner-panel-item">
                            <div class="f-14 f-c-midgrey">Luas</div>
                            <div class="f-16">Rp 60.000<span class="suffix">2 M2</span></div>
                        </div>
                        <div class="inner-panel-item">
                            <div class="f-14 f-c-midgrey">Koin</div>
                            <div class="f-16">Rp 59.000<span class="suffix">11 Koin</span></div>
                        </div>
                    </div>
                    <div class="m-t-12 inner-panel">
                        <div class="inner-panel-item">
                            <div class="f-16">Lihat Semua</div>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="detail-earning-btn p-y-20 lsp" data-toggle="collapse" data-target="#detail-earning">
                    <div class="show-more">Lihat rincian pendapatan</div>
                    <div class="show-less">Sembunyikan rincian</div>
                </div> -->

            <!-- </div> -->

            <!-- <div class="separator"></div> -->

            <!-- SECTION TODO -->
            <!-- <div class="w-limit p-x-20 p-t-24 p-d-24">
                <div class="f-18 f-bold">Dilakukan Hari Ini</div>
                <div class="m-t-12 inner-panel">
                    <div class="inner-panel-item">
                        <div class="f-14 f-c-midgrey">Pengantaran</div>
                        <div class="f-16">12 dari 20 Nota terantar</div>
                    </div>
                    <div class="inner-panel-item">
                        <div class="f-14 f-c-midgrey">Penyelesaian Order</div>
                        <div class="f-16">10 dari 10 Nota terselesaikan</div>
                    </div>
                </div>
            </div> -->

            <!-- <div class="separator"></div> -->

            <!-- SECTION ABSENSI -->
            <!-- <div class="w-limit p-x-20 p-t-24 p-d-24">
                <div class="f-18 f-bold">Absensi Hari Ini</div>
                <div class="inner-panel m-t-12">
                    <div class="p-t-12 p-d-12 p-x-20 f-14 f-c-midgrey">Dari 34 karyawan yg harus hadir</div>
                    <div class="inner-panel-12 d-flex">
                        <div class="f-16 flex-1 d-flex-align-center">
                            <div class="icon-16 icon-check-round m-r-8"></div>
                            <div class="f-16">12 Hadir</div>
                        </div>
                        <div class="f-16 flex-1 d-flex-align-center">
                            <div class="icon-16 icon-help-round m-r-8"></div>
                            <div class="f-16">22 Belum Hadir</div>
                        </div>
                    </div>
                </div>
            </div> -->

            <!-- <div class="separator"></div> -->

            <!-- SECTION PAPAN INFORMASI -->
            <!-- <div class="w-limit p-t-24">
                <div class="p-x-20">
                    <div class="f-18 f-bold">Papan Informasi</div>
                    <div class="m-t-4 f-16 f-semi f-c-blue arrow-right">Lihat Semua</div>
                </div>
            </div> -->
            <!-- <div class="w-limit extend m-t-20">
                <div class="splide-wrapper splide-info edge-fade pagination-mod arrows-mod hw-100">
                    <div id="splide-info" class="splide hw-100">
                        <div class="splide__track hw-100">
                            <div class="splide__list hw-100">
                                <div class="splide__slide">
                                    <img src="https://source.unsplash.com/400x300/?business" alt="">
                                    <div class="splide-info-text">
                                        <div class="f-16 flex-1">Ngobrol Bareng Founder Smartlink: Jalan Pintas Buka
                                            Cabang Tanpa Modal</div>
                                        <div class="f-14 f-c-midgrey m-t-4">Workshop</div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <img src="https://source.unsplash.com/400x300/?employee" alt="">
                                    <div class="splide-info-text">
                                        <div class="f-16 flex-1">Cara Mensejahterahkan Karyawan</div>
                                        <div class="f-14 f-c-midgrey m-t-4">Kiat Khusus</div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <img src="https://source.unsplash.com/400x300/?money" alt="">
                                    <div class="splide-info-text">
                                        <div class="f-16 flex-1">Sudah Kerja Keras tapi Digaji Kecil? Lakukan ini Saja
                                        </div>
                                        <div class="f-14 f-c-midgrey m-t-4">Tips & Trik</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->

        </main>

        <!-- NAVBAR BOTTOM -->

        <div id="nav-bottom">
            <div class="nav-overlay" @click="toggleMenu"></div>
            <nav class="nav-bottom--inner">
                <div class="navbar-wrapper w-limit">
                    <ul class="navbar-container">

                        <!-- Navbar Items / Menu Lists -->

                        <li class="navbar-item home active">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/beranda.svg" alt="">
                                <img src="../../assets/icons-menubar/beranda-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Dashboard
                            </div>
                        </li>

                        <li class="navbar-item karyawan" @click="listuser">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/karyawan.svg" alt="">
                                <img src="../../assets/icons-menubar/karyawan-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                List User
                            </div>
                        </li>

                        <li class="navbar-item menu-menu" @click="toggleMenu">
                            <div class="menu-bar-wrapper">
                                <div class="menu-bar">
                                    <img class="menu-label--closed" src="../../assets/icons-menubar/menu-bar-w.svg"
                                        alt="">
                                    <img class="menu-label--opened" src="../../assets/icons-menubar/menu-close-w.svg"
                                        alt="">
                                </div>
                            </div>
                            <div class="menu-label">
                                <div class="menu-label--closed">Menu</div>
                                <div class="menu-label--opened">Tutup</div>
                            </div>
                        </li>

                        <li class="navbar-item outlet" @click="createuser">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/outlet.svg" alt="">
                                <img src="../../assets/icons-menubar/outlet-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Create User
                            </div>
                        </li>

                        <li class="navbar-item bantuan">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/bantuan.svg" alt="">
                                <img src="../../assets/icons-menubar/bantuan-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Bantuan
                            </div>
                        </li>

                        <li class="navbar-item pelanggan">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/pelanggan.svg" alt="">
                                <img src="../../assets/icons-menubar/pelanggan-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Pelanggan
                            </div>
                        </li>

                        <li class="navbar-item transaksi">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/transaksi.svg" alt="">
                                <img src="../../assets/icons-menubar/transaksi-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Transaksi
                            </div>
                        </li>

                        <li class="navbar-item pembatalan">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/pembatalan.svg" alt="">
                                <img src="../../assets/icons-menubar/pembatalan-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Pembatalan
                            </div>
                        </li>

                        <li class="navbar-item keuangan">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/keuangan.svg" alt="">
                                <img src="../../assets/icons-menubar/keuangan-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Keuangan
                            </div>
                        </li>

                        <li class="navbar-item pengiriman">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/pengiriman.svg" alt="">
                                <img src="../../assets/icons-menubar/pengiriman-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Pengiriman
                            </div>
                        </li>

                        <li class="navbar-item aset">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/aset.svg" alt="">
                                <img src="../../assets/icons-menubar/aset-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Aset
                            </div>
                        </li>

                        <li class="navbar-item info-promo">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/info.svg" alt="">
                                <img src="../../assets/icons-menubar/info-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Info & Promo
                            </div>
                        </li>

                        <li class="navbar-item performa">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/performa.svg" alt="">
                                <img src="../../assets/icons-menubar/performa-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Performa
                            </div>
                        </li>

                        <li class="navbar-item suplai">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/suplai.svg" alt="">
                                <img src="../../assets/icons-menubar/suplai-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Suplai
                            </div>
                        </li>

                        <li class="navbar-item fitur-khusus">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/fiturkhusus.svg" alt="">
                                <img src="../../assets/icons-menubar/fiturkhusus-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Fitur Khusus
                            </div>
                        </li>

                        <li class="navbar-item user-profile">
                            <div class="menu-icon">
                                <img src="../../assets/icons-menubar/akun.svg" alt="">
                                <img src="../../assets/icons-menubar/akun-active.svg" alt="">
                            </div>
                            <div class="menu-label">
                                Akun
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    name:'Dashboard',
    methods: {
         createuser() {
                this.$router.push('/createuser')
            },

            listuser() {
                this.$router.push('/listuser')
            },

            toggleMenu() {
                $("#nav-bottom").toggleClass("is-open");
            },

            
    },
}
</script>
<style scoped>
    .header-top--dashboard {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header-top--dashboard .profile-wrapper {
        display: flex;
        align-items: center;
    }

    .header-top--dashboard .profile-wrapper .profile-picture {
        height: 30px;
        width: 30px;
        border: 1px solid rgba(0, 0, 0, 0.015);
        margin-right: 10px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
    }

    .header-top--dashboard .notification-bell-wrapper {
        display: flex;
        align-items: center;
    }

    .header-top--dashboard .notification-bell-wrapper .notification-counter {
        position: absolute;
        font-size: 12px;
        background: #FF5353;
        padding: 0px 2px;
        border-radius: 3px;
        color: white;
        top: 14px;
    }

    .main-dashboard {
        padding-top: 50px;
    }

    .slide-card {
        background: linear-gradient(114.48deg, #AFC9FF 0%, #4A85FF 100%);
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        padding: 12px 0px;
    }

    .text-omset {
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        display: flex;
        align-items: center;
        letter-spacing: -0.02em;
        color: #FFFFFF;
    }

    .text-rupiah {
        font-weight: bold;
        font-size: 24px;
        line-height: 37px;
        display: flex;
        align-items: center;
        letter-spacing: -0.02em;
        color: #FFFFFF;
    }

    .text-detail {
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
        letter-spacing: -0.02em;
        color: rgba(255, 255, 255, 0.55);
    }

    .status-dashboard {
        background: #FFFFFF;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.07);
        border-radius: 3px;
    }

    .status {
        padding: 10px 16px;
    }

    /* DASHBOARD */
    .paylink-panel {
        border: 1px solid #EDEDED;
        border-radius: 5px;
        overflow: hidden;
    }

    .paylink-panel .paylink-top-panel {
        background: linear-gradient(270deg, #4CA1AF 0%, #1C54C4 100%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 41px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .paylink-panel .paylink-balance {
        color: white;
        font-weight: 600;
    }

    .paylink-panel .paylink-bottom-panel {
        display: flex;
        justify-content: space-around;
        padding: 8px 0px;
    }

    .paylink-panel .paylink-bottom-panel .icon-panel {
        width: 28px;
        height: 28px;
        margin: auto;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .paylink-panel .paylink-bottom-panel .text-panel {
        color: #206cff;
        letter-spacing: -0.02em;
        font-size: 13px;
        margin-top: 4px;
        font-weight: 600;
    }

    .paylink-panel .paylink-bottom-panel .item-panel-wrapper {
        padding: 8px;
    }

    .inner-panel {
        border: 1px solid #EDEDED;
        border-radius: 3px;
    }

    .inner-panel .inner-panel-item {
        padding: 12px 48px 12px 16px;
        position: relative;
    }

    .inner-panel .inner-panel-item:not(:first-child),
    .inner-panel .inner-panel-12:not(:first-child) {
        border-top: 1px solid #EDEDED;
    }

    .inner-panel .inner-panel-item span.suffix:before {
        content: ' — '
    }

    .inner-panel .inner-panel-item span.suffix {
        font-size: 14px;
        color: #6F7287;
    }

    .inner-panel .inner-panel-12 {
        padding: 12px 16px;
    }

    .action-pending-wrapper .action-pending {
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(90deg, #E9F1FF 0%, #CCDDFF 100%);
        padding: 0 16px;
        border-radius: 5px;
    }

    .action-pending-text {
        color: #264073;
    }

    .action-pending-button {
        background: #206CFF;
        border-radius: 3px;
        color: white;
        padding: 2px 8px;
    }

    .pill-wrapper {
        display: flex;
    }

    .pill-wrapper .pill-item {
        margin-left: 4px;
        color: #206CFF;
        font-size: 14px;
        letter-spacing: -0.02em;
        border-radius: 100px;
        padding: 4px 12px;
        border: 1px solid #C8D0DD;
        font-weight: 600;
        transition: background-color .25s;
    }

    .pill-wrapper .pill-item:first-child {
        margin-left: 0px;
    }

    .pill-wrapper .pill-item.active {
        color: white;
        background-color: #206CFF;
        border-color: rgba(0, 0, 0, 0);
    }

    .f-28 {
        font-size: 28px;
    }

    .omzet-chart-wrapper {
        padding-top: 60%;
        position: relative;
    }

    .omzet-chart {
        width: 100% !important;
        height: 100% !important;
        position: absolute;
        top: 0px;
        left: 0px;
    }

    .omzet-chart-legend {
        display: flex;
        justify-content: center;
    }

    .omzet-chart-legend .legend-chart {
        display: flex;
        align-items: center;
    }

    .omzet-chart-legend .legend-chart:before {
        content: '';
        width: 8px;
        height: 8px;
        margin-right: 5px;
        border-radius: 50%;
    }

    .omzet-chart-legend .legend-chart.konv:before {
        background: #206CFF;
    }

    .omzet-chart-legend .legend-chart.snap:before {
        background: #98E184;
    }

    #detail-earning+.detail-earning-btn .show-less,
    #detail-earning.show+.detail-earning-btn .show-more {
        display: none
    }

    #detail-earning.show+.detail-earning-btn .show-less,
    #detail-earning+.detail-earning-btn .show-more {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .detail-earning-btn {
        color: #206CFF;
        text-align: center;
        font-weight: 600;
    }

    .splide-wrapper {
        position: relative;
    }

    .splide-wrapper.splide-ann {
        /* 320 x 116 ( + padding 20px ) */
        padding-top: 32.23%;
        position: relative;
    }

    .pagination-mod {
        margin-bottom: calc(16px + 8px);
    }

    ul.splide__pagination {
        z-index: auto;
        bottom: calc(-16px - 8px);
    }

    .splide-wrapper.splide-ann .splide {
        position: absolute;
        left: 0;
        top: 0;
    }

    .splide-wrapper .splide__slide {
        background: white;
        border-radius: 5px;
        overflow: hidden;
        background-position: center;
        background-size: cover;
    }

    .splide-wrapper .splide__slide img {
        vertical-align: middle;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .splide-wrapper.splide-info .splide__slide {
        border: 1px solid #C8D0DD;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
    }

    .splide-wrapper.splide-info .splide__slide img {
        height: 120px;
        border-bottom: 1px solid #C8D0DD;
    }

    .splide-wrapper.splide-info .splide__slide .splide-info-text {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 12px 16px;
    }

    .w-limit.extend {
        max-width: 620px;
    }

    .hw-100 {
        height: 100%;
        width: 100%;
    }

    .m-t-min-2 {
        margin-top: -2px;
    }

    @media screen and (min-width: 400px) {
        .splide-wrapper.splide-ann {
            padding-top: 130px;
        }
    }

    @media screen and (min-width: 620px) {

        .splide-wrapper .splide__track {
            border-radius: 5px;
        }

        .splide-wrapper.edge-fade:before,
        .splide-wrapper.edge-fade:after {
            content: '';
            width: 90px;
            height: 100%;
            position: absolute;
            bottom: 0;
        }

        .splide-wrapper.edge-fade:before {
            background-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
            left: 0;
            z-index: 1;
        }

        .splide-wrapper.edge-fade:after {
            background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
            right: 0;
        }
    }

    /* ---- THIS PAGE ---- */

    .section-group-line .section-item:not(:first-child) {
        border-top: 1px solid #EDEDED;
    }

    /* ---- MENU NAVBAR BOTTOM ---- */
    #nav-bottom.is-open .nav-bottom--inner {
        transform: translateY(0px);
    }

    #nav-bottom.is-open .nav-overlay {
        z-index: 1;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        left: 0;
        bottom: 0;
        /* backdrop-filter: blur(4px); */
        transition: all .2s ease;
    }

    #nav-bottom.is-open .menu-label--opened {
        display: block;
        color: #EB5757;
    }
    #nav-bottom.is-open .menu-label--closed {
        display: none;
    }

    #nav-bottom .menu-label--opened {
        display: none;
    }
    #nav-bottom .menu-label--closed {
        display: block;
    }

    #nav-bottom.is-open .menu-bar {
        background: linear-gradient(180deg, #EB5757 0%, #EF7676 100%);;
    }

    .nav-bottom--inner {
        background-color: white;
        position: fixed;
        width: 100%;
        box-shadow: 0px -6px 12px rgba(0, 0, 0, 0.05);
        border-radius: 10px 10px 0px 0px;
        transition: transform .2s ease-out;
        bottom: 0;
        transform: translateY(205px);
        z-index: 2;
    }

    .nav-bottom--inner ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nav-bottom--inner .navbar-container {
        display: flex;
        flex-wrap: wrap;
        padding: 0 4px;
    }

    .nav-bottom--inner li.navbar-item {
        text-align: center;
        font-size: 11px;
        letter-spacing: -0.02em;
        padding: 12px 0px;
        width: calc(100% / 5);
    }

    .menu-bar-wrapper {
        position: relative;
        height: 24px;
    }

    .menu-bar {
        display: flex;
        background: linear-gradient(180deg, #70A1FF 0%, #206CFF 100%);
        position: absolute;
        width: 52px;
        height: 52px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 4px solid white;
        bottom: -4px;
        transform: translateX(50%);
        right: 50%;
    }

    .nav-bottom--inner .navbar-item .menu-label {
        padding: 0 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 2px;
        color: #6F7287;
        /* word-break: break-word; */
    }

    .nav-bottom--inner .navbar-item .menu-icon img:nth-child(2) {
        display: none;
    }

    .nav-bottom--inner .navbar-item.active .menu-icon img:nth-child(1) {
        display: none;
    }

    .nav-bottom--inner .navbar-item.active .menu-icon img:nth-child(2) {
        display: inline;
    }

    .nav-bottom--inner .navbar-item.active .menu-label {
        color: #206CFF;
        font-weight: bold;
    }
</style>