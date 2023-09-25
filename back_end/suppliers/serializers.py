from rest_framework.serializers import ModelSerializer, RelatedField, CharField, Serializer, BooleanField

from suppliers.models import Suppliers, AddressSuppliers, TelephoneSuppliers


class AddressSuppliersSerializer(ModelSerializer):

    class Meta:
        model = AddressSuppliers
        fields = ['id', 'street_address', 'neighborhood', 'number', 'complement', 'zip_code', 'city', 'state', 'is_main']
        read_only_fields = ['id', ]


class TelephoneSuppliersSerializer(ModelSerializer):

    class Meta:
        model = TelephoneSuppliers
        fields = ['id', 'ddd', 'number', 'is_main']
        read_only_fields = ['id', ]


class SuppliersSerializer(ModelSerializer):
    address = AddressSuppliersSerializer(many=True)
    telephone = TelephoneSuppliersSerializer(many=True)

    class Meta:
        model = Suppliers
        fields = ['id', 'fantasy_name', 'corporate_reason', 'cnpj', 'address', 'telephone']
        read_only_fields = ['id', ]

    def create(self, validated_data):
        address_data = validated_data.pop('address')
        telephone_data = validated_data.pop('telephones')
        supplier = Suppliers.objects.create(**validated_data)
        [AddressSuppliers.objects.create(supplier=supplier, **address) for address in address_data]
        [TelephoneSuppliers.objects.create(supplier=supplier, **telephone) for telephone in telephone_data]
        return supplier
