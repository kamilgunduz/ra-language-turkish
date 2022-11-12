

module.exports = {
    ra: {
        action: {
            add_filter: 'Filtre ekle',
            add: 'Ekle',
            back: 'Geri Dön',
            bulk_actions: '1 seçildi |||| %{smart_count} seçildi',
            cancel: 'İptal',
            clear_input_value: 'Temizle',
            clone: 'Çoğalt',
            confirm: 'Onayla',
            create: 'Oluştur',
            delete: 'Sil',
            edit: 'Düzenle',
            export: 'Dışa aktar',
            list: 'Listele',
            refresh: 'Yenile',
            remove_filter: 'Filtreyi kaldır',
            remove: 'Kaldır',
            save: 'Kaydet',
            search: 'Ara',
            show: 'Göster',
            sort: 'Sırala',
            undo: 'Geri al',
            unselect: 'Seçimi kaldır',
            expand: 'Genişlet',
            close: 'Kapat',
            open_menu: 'Menüyü aç',
            close_menu: 'Menüyü kapat',
            create_item: '%{item} oluştur',
            move_down: 'Aşağı in',
            move_up: 'Yukarı çık',
            open: 'Aç',
            remove_all_filters: 'Tüm filtreleri kaldır',
            select_all: 'Tümünü seç',
            select_columns: 'Sütunları seç',
            select_row: 'Satırı seç',
            toggle_theme: 'Temayı Değiştir',
            update: 'Güncelle',
        },
        boolean: {
            true: 'Evet',
            false: 'Hayır',
            null: ' ',
        },
        page: {
            create: '%{name} oluştur',
            dashboard: 'Ana Sayfa',
            edit: '%{name} #%{id}',
            error: 'Bazı şeyler yolunda değil',
            list: '%{name} listesi',
            loading: 'Yükleniyor',
            not_found: 'Sayfa bulunamadı',
            show: '%{name} #%{id}',
            empty: 'Henüz% {name} yok.',
            invite: 'Eklemek ister misin?',
        },
        input: {
            file: {
                upload_several:
                    'Yüklemek istediğiniz dosyaları buraya sürükleyin ya da seçmek için tıklayın.',
                upload_single: 'Yüklemek istediğiniz dosyayı buraya sürükleyin ya da seçmek için tıklayın..',
            },
            image: {
                upload_several:
                    'Yüklemek istediğiniz resimleri buraya sürükleyin ya da seçmek için tıklayın.',
                upload_single:
                    'Yüklemek istediğiniz resmi buraya sürükleyin ya da seçmek için tıklayın.',
            },
            references: {
                all_missing: 'Referans verileri bulunamadı.',
                many_missing:
                    'İlişkilendirilmiş referanslardan en az biri artık mevcut değil.',
                single_missing:
                    'İlişkilendirilmiş referans artık mevcut değil.',
            },
            password: {
                toggle_visible: 'Şifreyi gizle',
                toggle_hidden: 'Şifreyi göster',
            },
        },
        message: {
            about: 'Hakkında',
            are_you_sure: 'Emin misiniz?',
            bulk_delete_content:
                '%{name} silmek istediğinizden emin misiniz? |||| %{smart_count} öğeyi silmek istediğinizden emin misiniz?',
            bulk_delete_title:
                '%{name} sil |||| %{smart_count} %{name} öğesi sil',
            delete_content: 'Bu öğeyi silmek istediğinizden emin misiniz?',
            delete_title: '%{name} #%{id} Sil',
            details: 'Detaylar',
            error:
                "Bir istemci hatası oluştu ve isteğiniz tamamlanamadı.",
            invalid_form: 'Form geçerli değil. Lütfen hataları kontrol edin',
            loading: 'Sayfa yükleniyor, lütfen bekleyiniz',
            no: 'Hayır',
            not_found:
                'Hatalı bir URL girdiniz ya da yanlış bir linke tıkladınız',
            yes: 'Evet',
            unsaved_changes:
                "Değişikliklerinizden bazıları kaydedilmedi. Onları görmezden gelmek istediğinizden emin misiniz?",
            bulk_update_content:
                'Bu %{name} güncellemek istediğinizden emin misiniz? |||| Bu %{smart_count} öğeyi güncellemek istediğinizden emin misiniz?',
            bulk_update_title:
                '%{name} Güncelle |||| %{smart_count} %{name} güncelle',
        },
        navigation: {
            no_results: 'Kayıt bulunamadı',
            no_more_results:
                '%{page} sayfası mevcut değil. Önceki sayfayı deneyin.',
            page_out_of_boundaries: '%{page} sayfası mevcut değil',
            page_out_from_end: 'Son sayfadan ileri gidemezsin',
            page_out_from_begin: '1. sayfadan geri gidemezsin',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            page_rows_per_page: 'Sayfa başına kayıtlar',
            next: 'Sonraki',
            prev: 'Önceki',
            partial_page_range_info: '%{offsetBegin}-%{offsetEnd} / %{offsetEnd} değerinden fazlası',
            current_page: 'Sayfa %{page}',
            page: '%{page}. sayfaya git',
            first: 'İlk sayfaya git',
            last: 'Son sayfaya git',
            previous: 'Önceki sayfaya git',
            skip_nav: 'İçeriğe atla',
        },
        sort: {
            sort_by: '% {Field}% {order}a göre sıralandı',
            ASC: 'artan',
            DESC: 'azalan',
        },
        auth: {
            auth_check_error: 'Devam etmek için lütfen giriş yapınız',
            user_menu: 'Profil',
            username: 'Kullanıcı adı',
            password: 'Parola',
            sign_in: 'Giriş yap',
            sign_in_error: 'Giriş başarısız. Lütfen tekrar deneyin',
            logout: 'Çıkış',
        },
        notification: {
            updated: 'Öğe güncellendi |||| %{smart_count} öğe güncellendi',
            created: 'Öğe oluşturuldu',
            deleted: 'Öğe silindi |||| %{smart_count} öğe silindi',
            bad_item: 'Hatalı öğe',
            item_doesnt_exist: 'Öğe bulunamadı',
            http_error: 'Sunucu iletişim hatası',
            data_provider_error:
                'dataProvider hatası. Detay için konsolu gözden geçir.',
            i18n_error:
                'Belirtilen dil için çeviriler yüklenemiyor',
            canceled: 'Eylem iptal edildi',
            logged_out: 'Oturumunuz sona erdi, Lütfen yeniden bağlanın.',
            not_authorized: 'Bu kaynağa erişim yetkiniz yok.',
        },
        validation: {
            required: 'Zorunlu alan',
            minLength: 'En az %{min} karakter',
            maxLength: 'En fazla %{max} karakter',
            minValue: 'En az %{min} olmalı',
            maxValue: 'En fazla %{max} olmali',
            number: 'Sayısal bir değer olmalı',
            email: 'E-posta geçerli değil',
            oneOf: 'Bunlardan biri olmalı: %{options}',
            regex: 'Belirli bir formatla eşleşmelidir (regexp): %{pattern}',
        },
        saved_queries: {
            label: 'Kaydedilen sorgular',
            query_name: 'Sorgu adı',
            new_label: 'Mevcut sorguyu kaydet ...',
            new_dialog_title: 'Mevcut sorguyu şu şekilde kaydet',
            remove_label: 'Kaydedilen sorguyu kaldır',
            remove_label_with_name: '"%{Name}" sorgusunu kaldır',
            remove_dialog_title: 'Kaydedilen sorguyu kaldırın mı?',
            remove_message: 'Bu öğeyi kaydedilen sorgular listenizden kaldırmak istediğinizden emin misiniz?',
            help: 'Listeyi filtreleyin ve bu sorguyu daha sonra kaydedin',
        },
        configurable: {
            customize: 'Özelleştirme',
            configureMode: 'Bu sayfayı özelleştirin',
            inspector: {
                title: 'Müfettiş',
                content: 'Özelleştirmek için uygulama kullanıcı arayüzü öğelerinin üzerine gelin',
                reset: 'Ayarları Sıfırla',
            },
            SimpleList: {
                primaryText: 'Birincil metin',
                secondaryText: 'İkincil metin',
                tertiaryText: 'Üçüncül metin',
            },
        },
    },
};
