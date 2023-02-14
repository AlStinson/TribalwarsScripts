const list = $("#plunder_list tr");
$("<th>Total</th>").insertBefore(list.first().children().eq(6));
list.each(i => {
    if (i<2) return;
    const rows = list.eq(i).children();
    const resources = rows.eq(5).children()
    const wood = parseInt(resources.eq(0).children(".res").html());
    const clay = parseInt(resources.eq(1).children(".res").html());
    const iron = parseInt(resources.eq(2).children(".res").html());
    const total = wood + clay + iron;
    $("<td class='nowrap'><span class='icon header ressources'></span><span class='res'>"+total+"</span></td>").insertAfter(rows.eq(5))
})