var plunder_tr_list;
if (!plunder_tr_list) {
  plunder_tr_list = $("#plunder_list tr");
  $("<th>Total</th>").insertBefore(plunder_tr_list.first().children().eq(6));
}
plunder_tr_list.each(i => {
    if (i<2) return;
    const row = plunder_tr_list.eq(i).children();
    if (row.eq(6).children(".res").length != 0) return;
    const resources = row.eq(5).children()
    const wood = parseInt(resources.eq(0).children().eq(1).html());
    const clay = parseInt(resources.eq(1).children().eq(1).html());
    const iron = parseInt(resources.eq(2).children().eq(1).html());
    const total = wood + clay + iron;
    $("<td class='nowrap'><span class='icon header ressources'></span><span class='res'>"+total+"</span></td>").insertAfter(row.eq(5))
})