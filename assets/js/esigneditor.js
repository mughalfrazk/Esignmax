DecoupledDocumentEditor
    .create(document.querySelector('#esigneditor'), {

        toolbar: {
            items: [
                'heading',
                '|',
                'fontSize',
                'fontFamily',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'highlight',
                '|',
                'alignment',
                '|',
                'numberedList',
                'bulletedList',
                '|',
                'indent',
                'outdent',
                '|',
                'insertTable',
                'todoList',
                'link',
                'blockQuote',
                'imageUpload',
                'mediaEmbed',
                'horizontalLine',
                'pageBreak',
                'removeFormat',
                'codeBlock',
                '|',
                'undo',
                'redo'
            ]
        },
        plugins: [Image],
        image: {
            toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight'],

            styles: [
                // This option is equal to a situation where no style is applied.
                'full',

                // This represents an image aligned to the left.
                'alignLeft',

                // This represents an image aligned to the right.
                'alignRight'
            ],
            resizeUnit: 'px',
        }
    })
    .then(editor => {
        const toolbarContainer = document.querySelector('.document-editor__toolbar');

        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
        // document.querySelector('.ck-toolbar').classList.add('ck-reset_all');
        // toolbarContainer.appendChild(editor.ui.getEditableElement());
    })
    .catch(error => {
        console.error(error.stack);
    });