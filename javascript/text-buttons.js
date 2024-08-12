// PLACEMENT : sur toutes les pages

$(function(){

    // BOUTON DE SUJET 
     $('.newtopic_button').replaceWith("<span>Nouveau</span>"); // Ouvrir un nouveau sujet
     $('.reply_button').replaceWith("<span>Répondre</span>"); // Répondre au sujet
    
     $('.newpm_button img').replaceWith("<span>Nouveau message privé</span>"); // Envoyer un nouveau MP
     $('.replypm_button img').replaceWith("<span>Répondre au message</span>"); // Répondre au MP
    
    // BOUTON EDITION DE MESSAGE
     $('.i_icon_quote').replaceWith("Citer"); // Bouton "citer"
     $('#i_icon_quote').replaceWith("Citer"); // Bouton "citer" dans les MP
     $('.i_icon_edit').replaceWith("Editer"); // Bouton "éditer"
     $('.i_icon_delete').replaceWith("Supprimer"); // Bouton "supprimer"
     $('#i_icon_delete').replaceWith("Supprimer"); // Bouton "supprimer" dans les MP et sondage
     $('.i_icon_ip').replaceWith("IP"); // Bouton "IP"
    
    // BOUTON DE CONTACT 
     $('.i_icon_profile, #i_icon_profile').replaceWith("Profil"); // Voir profil
     $('.i_icon_pm, #i_icon_pm').replaceWith("MP"); // Envoyer un MP
  
      $('.profil_contact .pcontact_top .contact-block:nth-child(3) a').html('<i class="fas fa-id-card"></i>'); // fiche de présentation
      $('.profil_contact .pcontact_bottom .contact-block:nth-child(4) a').html('<i class="fas fa-seedling"></i>'); // fiche d'évolution
      $('.profil_contact .pcontact_bottom .contact-block:nth-child(5) a').html('<i class="fab fa-pinterest"></i>'); // moodboard
      $('.profil_contact .pcontact_bottom .contact-block:nth-child(6) a').html('<i class="fab fa-spotify"></i>'); // playlist
      $('.profil_contact .pcontact_bottom .contact-block:nth-child(7) a').html('<i class="fas fa-star"></i>'); // autres
  
     // Pour les boutons de contact affichée dans le profil seul, utilisez l'inspecteur d'élément pour trouver l'ID correspondant au bouton
     // $('#field_idxxx img').replaceWith("Autre");
     $('.profile__misclinks > div:first-child a').html('<i class="fa-solid fa-envelope"></i>'); // mp
     $('#field_id6 img').replaceWith('<i class="fa-solid fa-id-card"></i>'); // présentation
     $('#field_id7 img').replaceWith('<i class="fa-solid fa-seedling"></i>'); // évolution
     $('#field_id8 img').replaceWith('<i class="fa-brands fa-pinterest"></i>'); // moodboard
     $('#field_id9 img').replaceWith('<i class="fa-brands fa-spotify"></i>'); // playlist
     $('#field_id10 img').replaceWith('<i class="fa-solid fa-star"></i>'); // autres
    
     // FLECHE A LA CON DERNIER POSTEUR
     $('.last-post-icon').html('<i class="fa-solid fa-arrow-right"></i>');
     $('.lastpost a img').replaceWith('<i class="fa-solid fa-arrow-right"></i>');
     $('.topicslist-lastpost a img').replaceWith('<i class="fa-solid fa-arrow-right"></i>');
  });