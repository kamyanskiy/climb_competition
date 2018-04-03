$(function() {
    $("div[data-toggle=fieldset]").each(function() {
        var $this = $(this);

            //Add new entry
        $this.find("button[data-toggle=fieldset-add-row]").click(function() {
            var target = $($(this).data("target"));
            // console.log(target);
            var oldrow = target.find("div[data-toggle=fieldset-entry]:last");
            // console.log(oldrow);
            var row = oldrow.clone(true, true);
            // console.log(row.find(":input")[0]);
            var elem_id = row.find(":input")[0].id;
            var elem_num = parseInt(elem_id.replace(/.*-(\d{1,4})-.*/m, '$1')) + 1;
            row.attr('data-id', elem_num);
            row.find(":input").each(function() {
                // console.log(this);
                var id = $(this).attr('id').replace('-' + (elem_num - 1) + '-', '-' + (elem_num) + '-');
                $(this).attr('name', id).attr('id', id);
            });

            row.find("label").each(function() {
                // console.log(this);
                var for_ = $(this).attr('for').replace('-' + (elem_num - 1) + '-', '-' + (elem_num) + '-');
                $(this).attr('for', for_);
            });

            row.find("div[data-toggle=fieldset-name]").each(function() {
                var text = $(this).text();
                console.log(text);
                $(this).text(text.replace('-' + (elem_num - 1), '-' + (elem_num)));
            });

            oldrow.after(row);
        }); //End add new entry

                //Remove row
        $this.find("button[data-toggle=fieldset-remove-row]").click(function() {
            if($this.find("div[data-toggle=fieldset-entry]").length > 1) {
                var thisRow = $(this).closest("div[data-toggle=fieldset-entry]");
                thisRow.remove();
            }
        }); //End remove row
    });
});